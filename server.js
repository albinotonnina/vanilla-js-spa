

import http from 'http';
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';



import config from './config.json';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
    exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
    limit: config.bodyLimit
}));

app.disable("x-powered-by");
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.use((req, res, next)=> {
//     res.header("Content-Type",'application/json');
//     next();
// });


app.use('/search', express.static(path.join(__dirname, 'dist')));
app.server.listen(process.env.PORT || config.port);
console.log(`Started on port ${app.server.address().port}`);





export default app;
