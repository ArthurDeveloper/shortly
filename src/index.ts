import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'development') {
    dotenv.config();
}

import server from './server';

const port = process.env.PORT ?? '3000';
server.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});