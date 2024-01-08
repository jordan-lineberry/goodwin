import * as dotenv from 'dotenv'
import path from 'path'
import { Pool } from 'pg'

dotenv.config({
  path: process.env.APP_ENV
    ? path.resolve(`.env.${process.env.APP_ENV}`)
    : path.resolve('.env'),
  override: true,
})

// any configuration or initialization variables
export const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  port: parseInt(process.env.DATABASE_PORT || '5432'), // Replace '5432' with the default PostgreSQL port if not specified in .env
})
