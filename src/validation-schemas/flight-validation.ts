import { z, object, string, ZodType } from 'zod'

const stringToNumberSchema = (def: number) =>
  z.string().default(`${def}`).transform(Number)
const safePreprocessor =
  <O, Z extends ZodType<O>>(preprocessorSchema: Z) =>
  (val: unknown): O | null => {
    const parsed = preprocessorSchema.safeParse(val)
    if (!parsed.success) {
      return null
    }
    return parsed.data
  }

export const flightSummarySchema = object({
  cursor: z.optional(z.string()),
  pageSize: z.preprocess(
    safePreprocessor(stringToNumberSchema(10)),
    z.number().optional(),
  ),
})

export const flightDetailSchema = object({
  flightId: string(),
})
