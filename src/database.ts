import dotenv from 'dotenv'

import pg from "pg";

const { Pool } = pg;

dotenv.config()

const {
    PG_HOST,
    PG_DB,
    PG_USER,
    PG_PASS
} = process.env

const client = new Pool({
    host: PG_HOST,
    database: PG_DB,
    user: PG_USER,
    password: PG_PASS
})

export default client