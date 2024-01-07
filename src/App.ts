import express, { Application as ExApplication } from 'express'
import healthcheck from './handlers/healthcheck'
import flightSummaryHandler from './handlers/flight-summary'
import flightDetailHandler from './handlers/flight-detail'

class App {
  private readonly _instance: ExApplication

  /**
   * @constructs App
   */
  constructor() {
    this._instance = express()
    this._instance.use(express.json())
    this.registerRouters()
  }

  /**
   * @get instance
   */
  get instance(): ExApplication {
    return this._instance
  }

  /**
   * registerRouters
   * @inner
   */
  private registerRouters() {
    this._instance.use('/api/v1/healthcheck', healthcheck)
    this._instance.use('/api/v1/flights/summary', flightSummaryHandler)
    this._instance.use('/api/v1/flights/:flightId', flightDetailHandler)
  }
}

export default new App()
