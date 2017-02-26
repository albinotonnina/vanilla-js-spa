import path from "path";
import express from "express";

export default () => {
    let api = express();

    api.use('/assets', express.static(path.join(__dirname, '../dist/assets')));
    api.use('/search/', express.static(path.join(__dirname, '../dist')));
    api.use('/results/', express.static(path.join(__dirname, '../dist')));

    api.get('*', function (req, res) {
        res.status(404).send('Requested page not found')
    });

    return api;
}
