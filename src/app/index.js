import 'whatwg-fetch';
import Promise from 'promise-polyfill';
if (!window.Promise) {
    window.Promise = Promise;
}

import App from './App';

window.onload = () => {
    App.Create().init();
};









