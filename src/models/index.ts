import { Pool, PoolClient } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function connect(callback: (client: PoolClient) => void) {
    const client = await pool.connect();
    return callback(client);
}

export default { connect };