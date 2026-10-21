import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Pool } = pkg;
process.loadEnvFile();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
export const db = drizzle({ client: pool });