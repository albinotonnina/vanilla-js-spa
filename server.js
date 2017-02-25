import http from 'http';
import express from 'express';
import path from 'path';
import api from './src/api';

let app = express();
app.server = http.createServer(app);

app.use('/api', api());

app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
app.use('/search', express.static(path.join(__dirname, 'dist')));
app.use('/results', express.static(path.join(__dirname, 'dist')));

app.server.listen(process.env.PORT || 9000);
console.log(`Zoopla server started on port ${app.server.address().port}`);

export default app;
