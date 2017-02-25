import ResultsView from '../ui/ResultsView';
import {ViewRenderer} from './mixins';

import styles from '../styles/SearchView.scss';

export default {

    View(data) {
        return Object.assign(Object.create({
            data
        }), ViewRenderer, this.methods);
    },

    methods: {

        className: 'SearchPage',

        render(){
            history.pushState({page: 'search'}, "Search", "/search");
            const el = this.initView(this.className);

            const div = document.createElement('div');

            div.innerHTML = `
                <input type="text" id="search-input"  class="${styles[this.className+'-input']}" />
                <button id="search-btn" class="${styles[this.className+'-btn']}">Search</button>
                `;
            
            el.appendChild(div);

            document.getElementById('search-btn').addEventListener('click', this.onClick, false);

            return el;
        },

        onClick(){
            const resultsView = ResultsView.View();
            resultsView.initSearch('N11');
        }

    }

};
