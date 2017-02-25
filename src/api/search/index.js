import express from 'express';
const dataJson = require('./data.json');
const router = express.Router({mergeParams: true});

export default () => {

    router.get('/', (req, res) => {
        res.status(200).json({});
    });

    router.get('/:query', (req, res) => {

        if(req.params.query === dataJson.area){
            res.status(200).send(dataJson);
        }else{
            res.status(200).json({
                area: req.params.query,
                result_count: 0
            });
        }
    });

    return router;

}

