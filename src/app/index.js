import 'whatwg-fetch';
import Promise from 'promise-polyfill';

import SearchView from './ui/SearchView';



// To add to window
if (!window.Promise) {
    window.Promise = Promise;
}






const searchView = SearchView.View();

const onpopstateCb = event => {

    if (event.state.page === 'search') {

        document.body.appendChild(searchView.render());

    } else {
        history.pushState({page: 'search'}, "Search", "/search");
    }

};

window.onload = () => {

    window.onpopstate = onpopstateCb;

    document.body.appendChild(searchView.render());
    // showSearch();
};









