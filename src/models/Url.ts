import db from './index';

type UrlType = {
    url: string,
    id: string
}

export default class Url {
    static async create(url: string, callback: (err?: Error | string, data?: UrlType) => void) {
        const generateId = () => {
            let id = '';
            const chars = 'abcdefghijklmnopqrstuvwxyz123456789';
            for (let i = 0; i < 6; i++) {
                id += chars[Math.floor(Math.random() * chars.length)];
            }
            return id;
        }

        let id = generateId();

        await db.connect(async (client) => {
            const res = await client.query('INSERT INTO urls VALUES ($1, $2)', [url, id]);
            return callback('', { url, id });
        });
    }

    static async get(id: string, callback: (err: Error | null, data?: UrlType) => void) {
        await db.connect(async (client) => {
            const res = await client.query('SELECT * FROM urls WHERE id = $1', [id])
            if (res.rows === []) {
                return callback(new Error('Url not found'));
            }
            return callback(null, res.rows[0]);
        });
    }
}