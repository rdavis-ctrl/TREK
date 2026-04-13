import express, { Request, Response } from 'express';
import { authenticate } from '../middleware/auth';
import { getFlightStatus } from '../services/flightService';

const router = express.Router();

/**
 * GET /api/flights/track
 *
 * Query params:
 *   flight_number     - e.g. "LH 123"
 *   departure_airport - IATA (FRA) or ICAO (EDDF)
 *   departure_time    - ISO 8601 scheduled departure, e.g. "2024-06-15T14:30:00"
 */
router.get('/track', authenticate, async (req: Request, res: Response) => {
  const { flight_number, departure_airport, departure_time } = req.query as Record<string, string>;

  if (!flight_number) {
    return res.status(400).json({ error: 'flight_number is required' });
  }
  if (!departure_airport) {
    return res.status(400).json({ error: 'departure_airport is required' });
  }

  try {
    const result = await getFlightStatus(
      flight_number,
      departure_airport,
      departure_time ?? '',
    );
    res.json(result);
  } catch (err) {
    console.error('[flights route] error:', err);
    res.status(500).json({ error: 'Failed to retrieve flight status' });
  }
});

export default router;
