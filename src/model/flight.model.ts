// models/Flight.ts
export class Flight {
  id: string;
  flight_id: string;
  tail_number: string;
  actual_gate_arrival_time?: string | null;
  actual_gate_departure_time?: string | null;
  actual_runway_arrival_time?: string | null;
  arrival_delay?: string | null;
  atc_ident?: string | null;
  baggage_claim?: string | null;
  blocked?: boolean | null;
  cancelled?: boolean | null;
  departure_delay?: string | null;
  diverted?: boolean | null;
  estimated_gate_arrival_time?: string | null;
  estimated_gate_departure_time?: string | null;
  estimated_runway_arrival_time?: string | null;
  estimated_runway_departure_time?: string | null;
  filed_airspeed?: string | null;
  filed_altitude?: string | null;
  filed_ete?: string | null;
  flight_number?: string | null;
  gate_destination?: string | null;
  gate_origin?: string | null;
  operator_iata?: string | null;
  origin?: string | null;
  destination?: string | null;
  progress_percent?: string | null;
  registration?: string | null;
  route?: string | null;
  route_distance?: string | null;
  scheduled_gate_arrival_time?: string | null;
  scheduled_gate_departure_time?: string | null;
  scheduled_runway_arrival_time?: string | null;
  scheduled_runway_departure_time?: string | null;
  seats_cabin_business?: string | null;
  seats_cabin_coach?: string | null;
  seats_cabin_first?: string | null;
  status?: string | null;
  terminal_destination?: string | null;
  terminal_original?: string | null;
  created_at: Date;
  created_by?: string | null;
  updated_at?: Date | null;
  updated_by?: string | null;
  actual_runway_departure_time?: string | null;
  destination_timezone?: string | null;
  origin_timezone?: string | null;
  inbound_fa_flight_id?: string | null;

  constructor({
    id,
    flight_id,
    tail_number,
    actual_gate_arrival_time,
    actual_gate_departure_time,
    actual_runway_arrival_time,
    arrival_delay,
    atc_ident,
    baggage_claim,
    blocked,
    cancelled,
    departure_delay,
    diverted,
    estimated_gate_arrival_time,
    estimated_gate_departure_time,
    estimated_runway_arrival_time,
    estimated_runway_departure_time,
    filed_airspeed,
    filed_altitude,
    filed_ete,
    flight_number,
    gate_destination,
    gate_origin,
    operator_iata,
    origin,
    destination,
    progress_percent,
    registration,
    route,
    route_distance,
    scheduled_gate_arrival_time,
    scheduled_gate_departure_time,
    scheduled_runway_arrival_time,
    scheduled_runway_departure_time,
    seats_cabin_business,
    seats_cabin_coach,
    seats_cabin_first,
    status,
    terminal_destination,
    terminal_original,
    created_at,
    created_by,
    updated_at,
    updated_by,
    actual_runway_departure_time,
    destination_timezone,
    origin_timezone,
    inbound_fa_flight_id,
  }: Partial<Flight>) {
    this.id = id || '';
    this.flight_id = flight_id || '';
    this.tail_number = tail_number || '';
    this.actual_gate_arrival_time = actual_gate_arrival_time || null;
    this.actual_gate_departure_time = actual_gate_departure_time || null;
    this.actual_runway_arrival_time = actual_runway_arrival_time || null;
    this.arrival_delay = arrival_delay || null;
    this.atc_ident = atc_ident || null;
    this.baggage_claim = baggage_claim || null;
    this.blocked = blocked || null;
    this.cancelled = cancelled || null;
    this.departure_delay = departure_delay || null;
    this.diverted = diverted || null;
    this.estimated_gate_arrival_time = estimated_gate_arrival_time || null;
    this.estimated_gate_departure_time = estimated_gate_departure_time || null;
    this.estimated_runway_arrival_time = estimated_runway_arrival_time || null;
    this.estimated_runway_departure_time = estimated_runway_departure_time || null;
    this.filed_airspeed = filed_airspeed || null;
    this.filed_altitude = filed_altitude || null;
    this.filed_ete = filed_ete || null;
    this.flight_number = flight_number || null;
    this.gate_destination = gate_destination || null;
    this.gate_origin = gate_origin || null;
    this.operator_iata = operator_iata || null;
    this.origin = origin || null;
    this.destination = destination || null;
    this.progress_percent = progress_percent || null;
    this.registration = registration || null;
    this.route = route || null;
    this.route_distance = route_distance || null;
    this.scheduled_gate_arrival_time = scheduled_gate_arrival_time || null;
    this.scheduled_gate_departure_time = scheduled_gate_departure_time || null;
    this.scheduled_runway_arrival_time = scheduled_runway_arrival_time || null;
    this.scheduled_runway_departure_time = scheduled_runway_departure_time || null;
    this.seats_cabin_business = seats_cabin_business || null;
    this.seats_cabin_coach = seats_cabin_coach || null;
    this.seats_cabin_first = seats_cabin_first || null;
    this.status = status || null;
    this.terminal_destination = terminal_destination || null;
    this.terminal_original = terminal_original || null;
    this.created_at = created_at || new Date();
    this.created_by = created_by || null;
    this.updated_at = updated_at || null;
    this.updated_by = updated_by || null;
    this.actual_runway_departure_time = actual_runway_departure_time || null;
    this.destination_timezone = destination_timezone || null;
    this.origin_timezone = origin_timezone || null;
    this.inbound_fa_flight_id = inbound_fa_flight_id || null;
  }
}
