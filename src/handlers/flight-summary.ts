import { Response, Request } from 'express'
import { getFlightSummary } from '../service/flights.service';
import { convertToSummary } from '../utils/helper';
import { flightSummarySchema } from '../validation-schemas/flight-validation';
import { ZodError } from 'zod';

/**
 * Flight Summery Handler
 * @param req
 * @param res
 */
export default async function flightSummaryHandler(req: Request, res: Response) {
  try {
    const { cursor, pageSize = 10 } = flightSummarySchema.parse(req.query);
    const flightsSummary = await getFlightSummary(cursor, pageSize)

    res.status(200).json({
      items: convertToSummary(flightsSummary),
      pageInfo: {
        cursor: flightsSummary.length > 0 ? flightsSummary[flightsSummary.length - 1].created_at : null
      }
    })
  } catch (error) {
    if (error instanceof ZodError) {
      // Handle Zod validation errors
      console.error('Zod validation error:', error.errors);
      return res.status(400).json({ message: 'Bad Request', errors: error.errors });
    } else {
      // Handle other types of errors
      console.error('Internal Server Error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
