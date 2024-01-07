import { Response, Request } from 'express'
import { Flight } from '../model/flight.model'
import { getFlightDetail } from '../service/flights.service'
import { getFlightStatus } from '../utils/helper'
import { flightDetailSchema } from '../validation-schemas/flight-validation'
import { ZodError } from 'zod'

/**
 * Flight Detail Handler
 * @param req
 * @param res
 */
export default async function flightDetailHandler(req: Request, res: Response) {
  try {
    const { flightId } = flightDetailSchema.parse(req.params)
    const flightDetail: Flight | null = await getFlightDetail(flightId)

    if (!flightDetail) {
      return res.status(404).json({ error: 'Flight not found' })
    }

    // Determine flight status based on the provided formula

    const flightStatus = getFlightStatus(flightDetail)

    const responsePayload = { ...flightDetail, flightStatus }

    return res.status(200).json(responsePayload)
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
