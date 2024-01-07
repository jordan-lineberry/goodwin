import { Flight } from 'model/flight.model'
import { pool } from '../config'
import { QueryResult } from 'pg'

export const getFlightSummary = async (cursor: string | null, pageSize: number): Promise<Flight[]> => {
  const query = {
    text: cursor
      ? "SELECT id, tail_number, origin, destination, created_at FROM goodwin.aircraft_flights WHERE created_at > $1 ORDER BY created_at LIMIT $2"
      : "SELECT id, tail_number, origin, destination, created_at FROM goodwin.aircraft_flights ORDER BY created_at LIMIT $1",
    values: cursor ? [cursor, pageSize] : [pageSize]
  };

  try {
    const result: QueryResult<Flight> = await pool.query(query)
    return result.rows;
  } catch (error) {
    throw new Error(`Error fetching flight summary: ${error.message}`);
  }
}

export const getFlightDetail = async (flightId: string): Promise<Flight> => {
  const query = {
    text: 'SELECT * FROM goodwin.aircraft_flights WHERE id = $1',
    values: [flightId],
  }
  
  try {
    const result: QueryResult<Flight> = await pool.query(query)
    return result.rows[0]
  } catch (error) {
    throw new Error(`Error fetching flight detail: ${error.message}`);
  }
}
