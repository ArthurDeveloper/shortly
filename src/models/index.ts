import { Pool, PoolClient } from 'pg';

const ssl = process.env.NODE_ENV === 'development' ? false : { rejectUnauthorized: false };

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl
});

async function connect(callback: (client: PoolClient) => void) {
    const client = await pool.connect();
    return callback(client);
}

export default { connect };