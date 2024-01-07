// validationSchemas/flightValidation.ts
import { z, object, string, boolean } from 'zod'

export const flightSummarySchema = object({
  cursor: z.optional(z.string()),
  pageSize: z.preprocess(
    a => parseInt(z.string().parse(a), 10),
    z.number().optional(),
  ),
})

export const flightDetailSchema = object({
  flightId: string(),
})
