import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env.development' })

export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.AUTH_DRIZZLE_URL ? process.env.AUTH_DRIZZLE_URL : '',
  },
})
