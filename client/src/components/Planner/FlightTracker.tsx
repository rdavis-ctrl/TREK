import { useState, useEffect, useCallback, useRef } from 'react'
import ReactDOM from 'react-dom'
import { X, RefreshCw, Loader2, Navigation, Gauge, ArrowUp, Plane, AlertTriangle, CheckCircle2, Clock } from 'lucide-react'
import { flightApi } from '../../api/client'
import type { Reservation } from '../../types'

// ── Types ─────────────────────────────────────────────────────────────────────

type FlightStatus = 'airborne' | 'on_ground' | 'landed' | 'not_found' | 'not_departed' | 'error'

interface FlightData {
  found: boolean
  status: FlightStatus
  icao24?: string
  callsign?: string
  origin_country?: string
  latitude?: number | null
  longitude?: number | null
  altitude_m?: number | null
  velocity_ms?: number | null
  heading?: number | null
  vertical_rate?: number | null
  on_ground?: boolean
  last_contact?: number
  departure_airport?: string | null
  arrival_airport?: string | null
  first_seen?: number
  last_seen?: number
  message?: string
}

interface FlightTrackerProps {
  reservation: Reservation
  onClose: () => void
}

// ── Conversion helpers ────────────────────────────────────────────────────────

const mToFt   = (m: number) => Math.round(m * 3.28084)
const msToKts = (ms: number) => Math.round(ms * 1.94384)
const fmtAlt  = (m: number | null | undefined) => m != null ? `${mToFt(m).toLocaleString()} ft` : '—'
const fmtSpd  = (ms: number | null | undefined) => ms != null ? `${msToKts(ms)} kts` : '—'
const fmtHdg  = (deg: number | null | undefined) => deg != null ? `${Math.round(deg)}°` : '—'
const fmtVr   = (ms: number | null | undefined) => {
  if (ms == null) return '—'
  const fpm = Math.round(ms * 196.85)
  return fpm >= 0 ? `+${fpm} fpm` : `${fpm} fpm`
}
const fmtTs   = (unix: number) => new Date(unix * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

// ── Status config ─────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<FlightStatus, { label: string; color: string; bg: string; Icon: React.FC<{ size?: number; style?: React.CSSProperties }> }> = {
  airborne:      { label: 'Airborne',       color: '#3b82f6', bg: 'rgba(59,130,246,0.1)',  Icon: Plane },
  on_ground:     { label: 'On Ground',      color: '#6b7280', bg: 'rgba(107,114,128,0.1)', Icon: Plane },
  landed:        { label: 'Landed',         color: '#16a34a', bg: 'rgba(22,163,74,0.1)',   Icon: CheckCircle2 },
  not_found:     { label: 'Not Found',      color: '#d97706', bg: 'rgba(217,119,6,0.1)',   Icon: AlertTriangle },
  not_departed:  { label: 'Not Departed',   color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)',  Icon: Clock },
  error:         { label: 'Unavailable',    color: '#ef4444', bg: 'rgba(239,68,68,0.1)',   Icon: AlertTriangle },
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function FlightTracker({ reservation, onClose }: FlightTrackerProps) {
  const [data, setData]       = useState<FlightData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  const [refreshedAt, setRefreshedAt] = useState<Date | null>(null)
  const [countdown, setCountdown]     = useState(60)
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null)
  const countRef  = useRef<ReturnType<typeof setInterval> | null>(null)

  const meta: Record<string, string> = typeof reservation.metadata === 'string'
    ? (() => { try { return JSON.parse(reservation.metadata || '{}') } catch { return {} } })()
    : (reservation.metadata as Record<string, string> ?? {})

  const flightNumber      = meta.flight_number ?? ''
  const departureAirport  = meta.departure_airport ?? ''
  const arrivalAirport    = meta.arrival_airport ?? ''
  const departureTime     = reservation.reservation_time ?? ''
  const departureTimezone = meta.departure_timezone ?? ''

  const refresh = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await flightApi.track(flightNumber, departureAirport, departureTime, departureTimezone)
      setData(result)
      setRefreshedAt(new Date())
      setCountdown(60)
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Network error'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }, [flightNumber, departureAirport, departureTime, departureTimezone])

  // Initial load
  useEffect(() => { refresh() }, [refresh])

  // Auto-refresh every 60 s (only while airborne or on_ground)
  useEffect(() => {
    if (data?.status !== 'airborne' && data?.status !== 'on_ground') return

    timerRef.current = setInterval(refresh, 60_000)
    countRef.current = setInterval(() => setCountdown(c => Math.max(0, c - 1)), 1_000)

    return () => {
      if (timerRef.current)  clearInterval(timerRef.current)
      if (countRef.current)  clearInterval(countRef.current)
    }
  }, [data?.status, refresh])

  const statusCfg = STATUS_CONFIG[data?.status ?? 'error']

  const modal = (
    <>
    <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
        padding: 16,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%', maxWidth: 480, background: 'var(--bg-card)',
          borderRadius: 20, boxShadow: '0 24px 60px rgba(0,0,0,0.28)',
          overflow: 'hidden', display: 'flex', flexDirection: 'column',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div style={{ padding: '18px 20px 14px', borderBottom: '1px solid var(--border-faint)', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(59,130,246,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Plane size={20} style={{ color: '#3b82f6' }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>
              {flightNumber || reservation.title || 'Flight'}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 2 }}>
              {departureAirport && arrivalAirport
                ? `${departureAirport} → ${arrivalAirport}`
                : departureAirport || arrivalAirport || 'Live flight status'}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ padding: 6, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-faint)', display: 'flex', borderRadius: 8, flexShrink: 0 }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-faint)'}
          >
            <X size={16} />
          </button>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Status pill */}
          {data && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 12, background: statusCfg.bg }}>
              <statusCfg.Icon size={16} style={{ color: statusCfg.color, flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: statusCfg.color }}>{statusCfg.label}</span>
              {data.callsign && (
                <>
                  <span style={{ width: 1, height: 14, background: statusCfg.color, opacity: 0.3, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: statusCfg.color, opacity: 0.8 }}>{data.callsign}</span>
                </>
              )}
              {data.origin_country && (
                <>
                  <span style={{ flex: 1 }} />
                  <span style={{ fontSize: 11, color: statusCfg.color, opacity: 0.7 }}>{data.origin_country}</span>
                </>
              )}
            </div>
          )}

          {/* Loading state */}
          {loading && !data && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '24px 0', color: 'var(--text-faint)' }}>
              <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
              <span style={{ fontSize: 13 }}>Querying OpenSky Network…</span>
            </div>
          )}

          {/* API error */}
          {error && (
            <div style={{ fontSize: 12, color: '#ef4444', padding: '8px 12px', borderRadius: 10, background: 'rgba(239,68,68,0.08)', textAlign: 'center' }}>
              {error}
            </div>
          )}

          {/* Not-found / not-departed message */}
          {data && !data.found && data.message && (
            <div style={{ fontSize: 12, color: 'var(--text-muted)', padding: '8px 12px', borderRadius: 10, background: 'var(--bg-secondary)', textAlign: 'center', lineHeight: 1.5 }}>
              {data.message}
            </div>
          )}

          {/* Live stats grid — only shown when data has position info */}
          {data?.found && (data.status === 'airborne' || data.status === 'on_ground') && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
              {/* Altitude */}
              <StatCard
                Icon={ArrowUp}
                label="Altitude"
                value={fmtAlt(data.altitude_m)}
                sub={data.vertical_rate != null ? fmtVr(data.vertical_rate) : undefined}
                color="#3b82f6"
              />
              {/* Speed */}
              <StatCard
                Icon={Gauge}
                label="Speed"
                value={fmtSpd(data.velocity_ms)}
                color="#8b5cf6"
              />
              {/* Heading */}
              <StatCard
                Icon={Navigation}
                label="Heading"
                value={fmtHdg(data.heading)}
                color="#f59e0b"
                iconRotate={data.heading ?? 0}
              />
              {/* Last contact */}
              <StatCard
                Icon={Clock}
                label="Last Contact"
                value={data.last_contact ? fmtTs(data.last_contact) : '—'}
                color="#10b981"
              />
            </div>
          )}

          {/* Route info for found flights */}
          {data?.found && (data.departure_airport || data.arrival_airport) && (
            <div style={{ display: 'flex', gap: 0, borderRadius: 10, overflow: 'hidden', background: 'var(--bg-secondary)' }}>
              {data.departure_airport && (
                <RouteCell label="Departed" value={data.departure_airport} sub={data.first_seen ? fmtTs(data.first_seen) : undefined} border />
              )}
              {data.arrival_airport && (
                <RouteCell label="Destination" value={data.arrival_airport} sub={data.last_seen && data.status === 'landed' ? `Arr. ${fmtTs(data.last_seen)}` : undefined} />
              )}
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div style={{ padding: '10px 20px 16px', borderTop: '1px solid var(--border-faint)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ flex: 1, fontSize: 10, color: 'var(--text-faint)' }}>
            {refreshedAt
              ? `Updated ${refreshedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
              : 'Powered by OpenSky Network'}
            {(data?.status === 'airborne' || data?.status === 'on_ground') && !loading
              ? ` · refreshing in ${countdown}s`
              : ''}
          </span>
          <a
            href="https://opensky-network.org"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 10, color: 'var(--text-faint)', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-faint)'}
          >
            OpenSky Network ↗
          </a>
          <button
            onClick={refresh}
            disabled={loading}
            title="Refresh"
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '6px 12px', borderRadius: 8, border: '1px solid var(--border-primary)',
              background: 'none', cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: 11, fontWeight: 600, color: 'var(--text-muted)',
              fontFamily: 'inherit', opacity: loading ? 0.5 : 1,
            }}
          >
            <RefreshCw size={11} style={loading ? { animation: 'spin 1s linear infinite' } : undefined} />
            Refresh
          </button>
        </div>
      </div>
    </div>
    </>
  )

  return ReactDOM.createPortal(modal, document.body)
}

// ── Sub-components ────────────────────────────────────────────────────────────

interface StatCardProps {
  Icon: React.FC<{ size?: number; style?: React.CSSProperties }>
  label: string
  value: string
  sub?: string
  color: string
  iconRotate?: number
}

function StatCard({ Icon, label, value, sub, color, iconRotate }: StatCardProps) {
  return (
    <div style={{ padding: '12px 14px', borderRadius: 12, background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <Icon size={13} style={{ color, transform: iconRotate != null ? `rotate(${iconRotate}deg)` : undefined }} />
        <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</span>
      </div>
      <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 10, color: 'var(--text-faint)' }}>{sub}</div>}
    </div>
  )
}

interface RouteCellProps {
  label: string
  value: string
  sub?: string
  border?: boolean
}

function RouteCell({ label, value, sub, border }: RouteCellProps) {
  return (
    <div style={{ flex: 1, padding: '8px 14px', textAlign: 'center', borderRight: border ? '1px solid var(--border-faint)' : 'none' }}>
      <div style={{ fontSize: 9, fontWeight: 600, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{value}</div>
      {sub && <div style={{ fontSize: 10, color: 'var(--text-faint)', marginTop: 2 }}>{sub}</div>}
    </div>
  )
}
