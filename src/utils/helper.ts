import { Flight } from 'model/flight.model'

export const convertToSummary = (flights: Partial<Flight>[]) => {
  return flights.map(({ id, destination, origin, tail_number }) => ({
    id,
    destination,
    origin,
    tail_number,
  }))
}

export const getFlightStatus = (flightDetail: Flight): string => {
  let flightStatus: string

  if (flightDetail.actual_runway_departure_time === null) {
    flightStatus = 'Not Departed Yet'
  } else if (
    flightDetail.actual_runway_departure_time !== null &&
    flightDetail.actual_runway_arrival_time === null
  ) {
    flightStatus = 'Currently En Route'
  } else if (
    flightDetail.actual_runway_departure_time !== null &&
    flightDetail.actual_runway_arrival_time !== null &&
    flightDetail.actual_runway_departure_time !==
      flightDetail.actual_runway_arrival_time
  ) {
    flightStatus = 'Arrived'
  } else {
    flightStatus = 'Unknown - Probably Arrived'
  }

  return flightStatus
}
