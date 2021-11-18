import express from 'express';
import path from 'path';
import routes from './routes';
import ejs from 'ejs';

const server = express();

server.use(express.static('public'));
server.set('views', path.join(__dirname, 'views'));
server.engine('html', ejs.renderFile);

server.use(routes);

export default server;