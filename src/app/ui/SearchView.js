import {ViewRenderer} from './mixins';
import styles from './styles/SearchView.scss';

export default {

    View(options) {
        return Object.assign(Object.create({options}), ViewRenderer, this.methods);
    },

    methods: {

        className: 'SearchPage',

        template(options){

            let title;

            if(options.noResults){
                title = `<h1 class="${styles[this.className + '-title']}">No results found</h1><h3>Enter another location and search again</h3>`;
            }else{
                title = `<h1 class="${styles[this.className + '-title']}">Search for houses and flats for sale across the UK</h1>`;
            }

            return title+`
                <input type="text" id="search-input"  class="${styles[this.className + '-input']}" value="N11" />
                <button id="search-btn" class="${styles[this.className + '-btn']}">Search</button>
                `;
        },

        render(options){

            const el = this.initView(styles[this.className]);

            // const div = document.createElement('div');

            el.innerHTML = this.template(options);

            // el.appendChild(div);

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
