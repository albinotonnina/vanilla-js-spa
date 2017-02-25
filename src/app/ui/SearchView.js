import {ViewRenderer} from './mixins';
import styles from './SearchView.scss';

export default {

    View(options) {
        return Object.assign(Object.create({options}), ViewRenderer, this.methods);
    },

    methods: {

        className: 'SearchPage',

        template(options){

            let title;

            if (options.noResults) {
                title = `<h1 id="search-title">No results found</h1><span class="${styles[this.className + '-subtitle']}">Enter another location and search again</span>`;
            } else {
                title = `<h1 id="search-title">Search for houses and flats for sale across the UK</h1>`;
            }

            return title + `
                <div class="${styles[this.className + '-searchBox']}">
                    <input class="${styles[this.className + '-input']}" type="text" id="search-input" />
                    <button class="${styles[this.className + '-btn']}" id="search-btn">Search</button>
                </div>
                `;
        },

        render(options){
            const el = this.initView(styles[this.className]);
            el.innerHTML = this.template(options);
            document.body.appendChild(el);
        },

        onSearch(cb){
            document.getElementById('search-btn').addEventListener('click', () => {
                const queryText = document.getElementById('search-input').value;
                cb(queryText);
            }, false);
        }

    }

};
