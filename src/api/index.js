import {version} from '../../package.json';
import {Router} from 'express';
import search from './search';


export default () => {
    let api = Router();

    api.use((req, res, next)=> {
        res.header("Content-Type",'application/json');
        next();
    });

    api.get('/', (req, res) => {
        res.json({version});
    });

    api.use('/search', search());

    return api;
}
