
// ── IATA → ICAO airport mapping ──────────────────────────────────────────────

const IATA_TO_ICAO: Record<string, string> = {
  // North America – USA
  ATL: 'KATL', LAX: 'KLAX', ORD: 'KORD', DFW: 'KDFW', DEN: 'KDEN',
  JFK: 'KJFK', SFO: 'KSFO', SEA: 'KSEA', LAS: 'KLAS', MCO: 'KMCO',
  MIA: 'KMIA', PHX: 'KPHX', IAH: 'KIAH', BOS: 'KBOS', MSP: 'KMSP',
  EWR: 'KEWR', DTW: 'KDTW', PHL: 'KPHL', LGA: 'KLGA', FLL: 'KFLL',
  BWI: 'KBWI', SLC: 'KSLC', MDW: 'KMDW', DCA: 'KDCA', IAD: 'KIAD',
  SAN: 'KSAN', TPA: 'KTPA', PDX: 'KPDX', HNL: 'PHNL', AUS: 'KAUS',
  MSY: 'KMSY', STL: 'KSTL', BNA: 'KBNA', RDU: 'KRDU', SJC: 'KSJC',
  SMF: 'KSMF', OAK: 'KOAK', MCI: 'KMCI', CLE: 'KCLE', IND: 'KIND',
  PIT: 'KPIT', CMH: 'KCMH', RSW: 'KRSW', MKE: 'KMKE', ABQ: 'KABQ',
  // North America – Canada & Mexico
  YYZ: 'CYYZ', YVR: 'CYVR', YUL: 'CYUL', YYC: 'CYYC', YEG: 'CYEG',
  MEX: 'MMMX', CUN: 'MMUN', GDL: 'MMGL', MTY: 'MMMY',
  // South America
  GRU: 'SBGR', EZE: 'SAEZ', GIG: 'SBGL', BOG: 'SKBO', SCL: 'SCEL',
  LIM: 'SPIM', UIO: 'SEQM', BSB: 'SBBR', CNF: 'SBCF', CWB: 'SBCT',
  // Europe – major hubs
  LHR: 'EGLL', LGW: 'EGKK', STN: 'EGSS', LTN: 'EGGW',
  CDG: 'LFPG', ORY: 'LFPO', NCE: 'LFMN', MRS: 'LFML', LYS: 'LFLL',
  BOD: 'LFBD', TLS: 'LFBO',
  AMS: 'EHAM', FRA: 'EDDF', MUC: 'EDDM', DUS: 'EDDL', HAM: 'EDDH',
  BER: 'EDDB', CGN: 'EDDK', STR: 'EDDS', NUE: 'EDDN', HAJ: 'EDDV',
  MAD: 'LEMD', BCN: 'LEBL', VLC: 'LEVC', AGP: 'LEMG', ALC: 'LEAL',
  PMI: 'LEPA', SVQ: 'LEZL', BIO: 'LEBB',
  FCO: 'LIRF', LIN: 'LIML', MXP: 'LIMC', VCE: 'LIPZ', NAP: 'LIRN',
  BLQ: 'LIPE',
  ZRH: 'LSZH', GVA: 'LSGG', BSL: 'LFSB',
  VIE: 'LOWW', BRU: 'EBBR', CPH: 'EKCH', OSL: 'ENGM', ARN: 'ESSA',
  HEL: 'EFHK', MAN: 'EGCC', DUB: 'EIDW', LIS: 'LPPT', ATH: 'LGAV',
  IST: 'LTBA', SAW: 'LTFJ', WAW: 'EPWA', PRG: 'LKPR', BUD: 'LHBP',
  OTP: 'LROP', SOF: 'LBSF', EDI: 'EGPH', BHX: 'EGBB', GLA: 'EGPF',
  BRS: 'EGGD',
  // Middle East
  DXB: 'OMDB', AUH: 'OMAA', DOH: 'OTHH', KWI: 'OKKK', BAH: 'OBBI',
  AMM: 'OJAI', BEY: 'OLBA', RUH: 'OERK', JED: 'OEJN', TLV: 'LLBG',
  // Africa
  CAI: 'HECA', CMN: 'GMMN', JNB: 'FAOR', CPT: 'FACT', NBO: 'HKJK',
  ADD: 'HAAB', LOS: 'DNMM', ACC: 'DGAA',
  // Asia – East & SE Asia
  PEK: 'ZBAA', PKX: 'ZBAD', PVG: 'ZSPD', SHA: 'ZSSS', CAN: 'ZGGG',
  HKG: 'VHHH', TPE: 'RCTP', ICN: 'RKSI', GMP: 'RKSS', NRT: 'RJAA',
  HND: 'RJTT', KIX: 'RJBB', NGO: 'RJGG', OKA: 'ROAH', OIT: 'RJFO',
  FUK: 'RJFF', CTS: 'RJCC', HIJ: 'RJOA', KMJ: 'RJFT', KOJ: 'RJFK',
  AOJ: 'RJSA', SDJ: 'RJSS', ITM: 'RJOO', UKB: 'RJBE', TAK: 'RJOT',
  BKK: 'VTBS', DMK: 'VTBD',
  SIN: 'WSSS', KUL: 'WMKK', CGK: 'WIII', MNL: 'RPLL', SGN: 'VVTS',
  HAN: 'VVNB',
  // South Asia
  BOM: 'VABB', DEL: 'VIDP', BLR: 'VOBL', MAA: 'VOMM', HYD: 'VOHS',
  CCU: 'VECC', KTM: 'VNKT', CMB: 'VCBI',
  // Oceania
  SYD: 'YSSY', MEL: 'YMML', BNE: 'YBBN', PER: 'YPPH', ADL: 'YPAD',
  AKL: 'NZAA', CHC: 'NZCH',
};

// ── Interfaces ────────────────────────────────────────────────────────────────

export type FlightStatus =
  | 'airborne'
  | 'on_ground'
  | 'landed'
  | 'not_found'
  | 'not_departed'
  | 'error';

export interface FlightStatusResult {
  found: boolean;
  status: FlightStatus;
  icao24?: string;
  callsign?: string;
  origin_country?: string;
  latitude?: number | null;
  longitude?: number | null;
  altitude_m?: number | null;
  velocity_ms?: number | null;
  heading?: number | null;
  vertical_rate?: number | null;
  on_ground?: boolean;
  last_contact?: number;
  departure_airport?: string | null;
  arrival_airport?: string | null;
  first_seen?: number;
  last_seen?: number;
  message?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Resolve an airport code to its ICAO equivalent.
 *  - 4-char codes are assumed to already be ICAO.
 *  - 3-char codes are looked up in the IATA→ICAO table.
 */
function resolveAirportCode(code: string): string | null {
  const upper = code.trim().toUpperCase();
  if (upper.length === 4) return upper;          // likely already ICAO
  if (upper.length === 3) return IATA_TO_ICAO[upper] ?? null;
  return null;
}

/** Normalise a flight number to uppercase with no spaces: "LH 123" → "LH123" */
function normaliseFlightNum(fn: string): string {
  return fn.replace(/\s+/g, '').toUpperCase();
}

/** Extract the purely-numeric suffix: "LH123" → "123", "EK1" → "1" */
function numericSuffix(fn: string): string {
  const m = fn.match(/(\d+[A-Z]?)$/);
  return m ? m[1] : '';
}

/** Return true if the OpenSky callsign is a plausible match for the user's
 *  flight number.  Handles both same-prefix (LH123) and ICAO-prefix (DLH123)
 *  callsigns.
 */
function callsignMatches(rawCallsign: string, normalisedFlight: string): boolean {
  const cs = rawCallsign.trim().toUpperCase();
  if (!cs) return false;

  // Exact match (e.g. callsign "LH123" === "LH123")
  if (cs === normalisedFlight) return true;

  // Callsign ends with the full normalised flight number (ICAO prefix prepended)
  // e.g. "DLH123" ends with "LH123" — very common for European carriers
  if (cs.endsWith(normalisedFlight)) return true;

  // Callsign ends with just the numeric-plus-suffix part
  // e.g. "DLH0123" → numeric "123" matches "LH123" numeric "123"
  const suffix = numericSuffix(normalisedFlight);
  if (suffix && cs.endsWith(suffix)) return true;

  return false;
}

// ── IATA → ICAO airline code mapping (for callsign resolution) ───────────────
// Commercial callsigns use ICAO airline codes, not IATA (e.g. MU→CES, LH→DLH)

const AIRLINE_IATA_TO_ICAO: Record<string, string> = {
  // China
  MU: 'CES', CA: 'CCA', CZ: 'CSN', HU: 'CHH', MF: 'XMN', ZH: 'CSZ',
  '3U': 'CSC', GS: 'GTI', KN: 'CXA', EU: 'UEA', SC: 'CDG', G5: 'HXA',
  // USA
  AA: 'AAL', UA: 'UAL', DL: 'DAL', WN: 'SWA', B6: 'JBU', AS: 'ASA',
  F9: 'FFT', NK: 'NKS', G4: 'AAY', SY: 'SCX',
  // Europe
  LH: 'DLH', BA: 'BAW', AF: 'AFR', KL: 'KLM', IB: 'IBE', SK: 'SAS',
  AY: 'FIN', LX: 'SWR', OS: 'AUA', SN: 'BEL', TP: 'TAP', VY: 'VLG',
  U2: 'EZY', FR: 'RYR', W6: 'WZZ', TK: 'THY', PS: 'AUI', LO: 'LOT',
  // Middle East / Africa
  EK: 'UAE', EY: 'ETD', QR: 'QTR', GF: 'GFA', MS: 'MSR', ET: 'ETH',
  // Asia-Pacific
  CX: 'CPA', CI: 'CAL', BR: 'EVA', SQ: 'SIA', MH: 'MAS', GA: 'GIA',
  TG: 'THA', VN: 'HVN', OZ: 'AAR', KE: 'KAL', NH: 'ANA', JL: 'JAL',
  JQ: 'JST', QF: 'QFA', NZ: 'ANZ', AI: 'AIC', SL: 'THA',
  // Americas
  AC: 'ACA', AM: 'AMX', LA: 'LAN', G3: 'GLO', CM: 'CMP', AV: 'AVA',
};

// ── adsb.lol API helpers ──────────────────────────────────────────────────────

interface AdsbAircraft {
  hex: string;
  flight?: string;
  lat?: number;
  lon?: number;
  alt_baro?: number | string;  // feet, or "ground"
  alt_geom?: number;           // feet
  gs?: number;                 // knots
  track?: number;              // degrees
  baro_rate?: number;          // feet/min
  r?: string;                  // registration
  t?: string;                  // aircraft type
}

/** Fetch live aircraft state from adsb.lol by callsign (case-insensitive). */
async function fetchAdsbByCallsign(callsign: string): Promise<AdsbAircraft | null> {
  const url = `https://api.adsb.lol/v2/callsign/${encodeURIComponent(callsign.trim())}`;
  const resp = await fetch(url, {
    headers: { 'Accept': 'application/json' },
    signal: AbortSignal.timeout(15_000),
  });
  if (!resp.ok) return null;
  const data = await resp.json() as { ac?: AdsbAircraft[]; total?: number };
  return data.ac && data.ac.length > 0 ? data.ac[0] : null;
}

/**
 * Try multiple callsign variants for a flight number.
 * e.g. "MU524" → try "CES524" (ICAO prefix) then "MU524" (IATA prefix).
 */
async function findAdsbAircraft(normFlight: string): Promise<AdsbAircraft | null> {
  // Extract letter prefix and numeric suffix
  const prefixMatch = normFlight.match(/^([A-Z0-9]{2,3})(\d+[A-Z]?)$/);
  if (!prefixMatch) return fetchAdsbByCallsign(normFlight);

  const iataPrefix = prefixMatch[1];
  const numSuffix  = prefixMatch[2];
  const icaoPrefix = AIRLINE_IATA_TO_ICAO[iataPrefix];

  // Try ICAO callsign first (most common for commercial aviation)
  if (icaoPrefix) {
    const result = await fetchAdsbByCallsign(icaoPrefix + numSuffix);
    if (result) return result;
  }

  // Fallback: try the flight number as-is
  return fetchAdsbByCallsign(normFlight);
}

// ── Timezone helper ───────────────────────────────────────────────────────────

/**
 * Parse a timezone string like "UTC+9", "UTC+09:00", "GMT-5", "+05:30" into
 * a signed offset in seconds.  Returns 0 if unrecognised.
 */
function parseTzOffsetSeconds(tz: string): number {
  if (!tz) return 0;
  const m = tz.match(/([+-])(\d{1,2})(?::(\d{2}))?/);
  if (!m) return 0;
  const sign    = m[1] === '+' ? 1 : -1;
  const hours   = parseInt(m[2], 10);
  const minutes = parseInt(m[3] ?? '0', 10);
  return sign * (hours * 3600 + minutes * 60);
}

// ── Main export ───────────────────────────────────────────────────────────────

/**
 * Look up live status for a flight reservation.
 *
 * @param flightNumber      - As stored in metadata, e.g. "LH 123" or "EK001"
 * @param departureAirport  - IATA (FRA) or ICAO (EDDF) code
 * @param departureTime     - ISO 8601 string of scheduled departure (may be local time)
 * @param departureTimezone - Timezone string e.g. "UTC+9" or "GMT-5" (optional)
 */
export async function getFlightStatus(
  flightNumber: string,
  departureAirport: string,
  departureTime: string,
  departureTimezone?: string,
): Promise<FlightStatusResult> {
  // ── Validate inputs ──
  if (!flightNumber?.trim()) {
    return { found: false, status: 'not_found', message: 'No flight number provided' };
  }
  if (!departureAirport?.trim()) {
    return { found: false, status: 'not_found', message: 'No departure airport provided' };
  }

  const normFlight = normaliseFlightNum(flightNumber);

  // ── Compute UTC departure time for not_departed check ──
  let depUnixLocal: number;
  if (departureTime) {
    depUnixLocal = Math.floor(new Date(departureTime).getTime() / 1000);
  } else {
    depUnixLocal = Math.floor(Date.now() / 1000);
  }

  const tzOffsetSecs = parseTzOffsetSeconds(departureTimezone ?? '');
  const depUnix = tzOffsetSecs !== 0 ? depUnixLocal - tzOffsetSecs : depUnixLocal;
  const now = Math.floor(Date.now() / 1000);

  // Flight departs more than 45 minutes from now → not yet departed
  if (depUnix > now + 45 * 60) {
    return { found: false, status: 'not_departed', message: 'Flight has not departed yet' };
  }

  // ── Query adsb.lol for live state ──
  let aircraft: AdsbAircraft | null = null;
  try {
    aircraft = await findAdsbAircraft(normFlight);
  } catch (err) {
    console.error('[flightService] adsb.lol fetch failed:', err);
    return { found: false, status: 'error', message: 'Failed to reach flight data service' };
  }

  if (!aircraft) {
    // Not currently tracked — determine why
    const status: FlightStatus = depUnix < now - 3600 ? 'landed' : 'not_found';
    return {
      found: false,
      status,
      message: status === 'landed'
        ? 'Flight has landed and is no longer being tracked'
        : 'Flight not currently tracked — it may not have departed yet',
    };
  }

  const onGround = aircraft.alt_baro === 'ground' || aircraft.alt_baro === 0;
  const altFt    = typeof aircraft.alt_baro === 'number' && aircraft.alt_baro > 0
    ? aircraft.alt_baro : null;

  // ── Determine status ──
  const status: FlightStatus = onGround ? 'on_ground' : 'airborne';

  return {
    found: true,
    status,
    icao24:        aircraft.hex,
    callsign:      aircraft.flight?.trim() ?? normFlight,
    latitude:      aircraft.lat ?? null,
    longitude:     aircraft.lon ?? null,
    // adsb.lol gives feet/knots/fpm — convert to SI for the shared interface
    altitude_m:    altFt != null ? Math.round(altFt * 0.3048) : null,
    velocity_ms:   aircraft.gs != null ? Math.round(aircraft.gs * 0.514444 * 10) / 10 : null,
    heading:       aircraft.track ?? null,
    vertical_rate: aircraft.baro_rate != null ? aircraft.baro_rate * 0.00508 : null,
    on_ground:     onGround,
    last_contact:  Math.floor(Date.now() / 1000),
  };
}
