import { Response, Request } from 'express'

/**
 * HealthCheck
 * @param req
 * @param res
 */
export default function healthcheck(req: Request, res: Response) {
  try {
    return res.status(200).json({ status: 'ok' })
  } catch (e) {
    return res.status(500).json({ status: e })
  }
}
