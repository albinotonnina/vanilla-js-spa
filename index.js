import http from 'http';
import express from 'express';
import path from 'path';
import api from './src/api';
import server from './src/server';

let app = express();
app.server = http.createServer(app);

app.use('/api', api());
app.use('/', server());

app.server.listen(process.env.PORT || 9000);
console.log(`Zoopla server started on port ${app.server.address().port}`);

export default app;
