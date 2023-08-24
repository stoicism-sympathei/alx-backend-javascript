// full_server/server.js
import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use('/', routes);

export default app;

