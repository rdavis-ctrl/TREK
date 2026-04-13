
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

interface OpenSkyFlight {
  icao24: string;
  firstSeen: number;
  estDepartureAirport: string | null;
  lastSeen: number;
  estArrivalAirport: string | null;
  callsign: string | null;
}

interface OpenSkyStateVector {
  icao24: string;
  callsign: string | null;
  origin_country: string;
  time_position: number | null;
  last_contact: number;
  longitude: number | null;
  latitude: number | null;
  baro_altitude: number | null;
  on_ground: boolean;
  velocity: number | null;
  true_track: number | null;
  vertical_rate: number | null;
  geo_altitude: number | null;
  squawk: string | null;
}

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

// ── OpenSky API helpers ───────────────────────────────────────────────────────

const OPENSKY_BASE = 'https://opensky-network.org/api';

async function fetchDepartures(
  airportIcao: string,
  begin: number,
  end: number,
): Promise<OpenSkyFlight[]> {
  const url = `${OPENSKY_BASE}/flights/departure?airport=${airportIcao}&begin=${begin}&end=${end}`;
  const resp = await fetch(url, {
    headers: { 'Accept': 'application/json' },
    signal: AbortSignal.timeout(10_000),
  });
  if (resp.status === 404) return [];      // no flights in window
  if (!resp.ok) throw new Error(`OpenSky departures error ${resp.status}`);
  const data = await resp.json() as OpenSkyFlight[];
  return Array.isArray(data) ? data : [];
}

async function fetchLiveState(icao24: string): Promise<OpenSkyStateVector | null> {
  const url = `${OPENSKY_BASE}/states/all?icao24=${icao24.toLowerCase()}`;
  const resp = await fetch(url, {
    headers: { 'Accept': 'application/json' },
    signal: AbortSignal.timeout(10_000),
  });
  if (!resp.ok) return null;
  const data = await resp.json() as { time: number; states: unknown[][] | null };
  if (!data.states || data.states.length === 0) return null;

  const s = data.states[0] as (string | number | boolean | null)[];
  return {
    icao24:          s[0] as string,
    callsign:        s[1] as string | null,
    origin_country:  s[2] as string,
    time_position:   s[3] as number | null,
    last_contact:    s[4] as number,
    longitude:       s[5] as number | null,
    latitude:        s[6] as number | null,
    baro_altitude:   s[7] as number | null,
    on_ground:       s[8] as boolean,
    velocity:        s[9] as number | null,
    true_track:      s[10] as number | null,
    vertical_rate:   s[11] as number | null,
    geo_altitude:    s[13] as number | null,
    squawk:          s[14] as string | null,
  };
}

// ── Main export ───────────────────────────────────────────────────────────────

/**
 * Look up live status for a flight reservation.
 *
 * @param flightNumber    - As stored in metadata, e.g. "LH 123" or "EK001"
 * @param departureAirport - IATA (FRA) or ICAO (EDDF) code
 * @param departureTime   - ISO 8601 string of scheduled departure
 */
export async function getFlightStatus(
  flightNumber: string,
  departureAirport: string,
  departureTime: string,
): Promise<FlightStatusResult> {
  // ── Validate inputs ──
  if (!flightNumber?.trim()) {
    return { found: false, status: 'not_found', message: 'No flight number provided' };
  }
  if (!departureAirport?.trim()) {
    return { found: false, status: 'not_found', message: 'No departure airport provided' };
  }

  const airportIcao = resolveAirportCode(departureAirport);
  if (!airportIcao) {
    return { found: false, status: 'not_found', message: `Unrecognised airport code: ${departureAirport}` };
  }

  const normFlight = normaliseFlightNum(flightNumber);

  // ── Determine search window (max 2 h for anonymous OpenSky) ──
  let depUnix: number;
  if (departureTime) {
    depUnix = Math.floor(new Date(departureTime).getTime() / 1000);
  } else {
    depUnix = Math.floor(Date.now() / 1000);
  }

  const now = Math.floor(Date.now() / 1000);

  // Flight departs more than 45 minutes from now → not yet departed
  if (depUnix > now + 45 * 60) {
    return { found: false, status: 'not_departed', message: 'Flight has not departed yet' };
  }

  // Centre a 2-hour window on the scheduled departure
  const begin = depUnix - 3600;
  const end   = depUnix + 3600;

  // ── Query OpenSky departures ──
  let departures: OpenSkyFlight[];
  try {
    departures = await fetchDepartures(airportIcao, begin, end);
  } catch (err) {
    console.error('[flightService] departures fetch failed:', err);
    return { found: false, status: 'error', message: 'Failed to reach OpenSky Network' };
  }

  // ── Find matching flight ──
  const match = departures.find(
    f => f.callsign && callsignMatches(f.callsign, normFlight),
  );

  if (!match) {
    return {
      found: false,
      status: 'not_found',
      message: `No matching flight found at ${airportIcao} around departure time`,
    };
  }

  // ── Get live state ──
  let state: OpenSkyStateVector | null = null;
  try {
    state = await fetchLiveState(match.icao24);
  } catch (err) {
    console.error('[flightService] states fetch failed:', err);
  }

  // ── Determine status ──
  let status: FlightStatus;
  if (!state) {
    // Flight was found in departures but no live state — probably landed
    status = match.lastSeen < now - 600 ? 'landed' : 'not_found';
  } else if (state.on_ground) {
    status = 'on_ground';
  } else {
    status = 'airborne';
  }

  return {
    found: true,
    status,
    icao24:         match.icao24,
    callsign:       match.callsign?.trim() ?? undefined,
    origin_country: state?.origin_country,
    latitude:       state?.latitude ?? null,
    longitude:      state?.longitude ?? null,
    altitude_m:     state?.baro_altitude ?? state?.geo_altitude ?? null,
    velocity_ms:    state?.velocity ?? null,
    heading:        state?.true_track ?? null,
    vertical_rate:  state?.vertical_rate ?? null,
    on_ground:      state?.on_ground,
    last_contact:   state?.last_contact,
    departure_airport: match.estDepartureAirport,
    arrival_airport:   match.estArrivalAirport,
    first_seen:     match.firstSeen,
    last_seen:      match.lastSeen,
  };
}
