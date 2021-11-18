import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import routes from './routes';
import ejs from 'ejs';

const app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);

app.use(routes);

const port = process.env.PORT ?? '3000';
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});