/* global document */
import ViewRenderer from "./mixins";
import styles from "./SearchView.scss";

export default {

    View(options) {
        return Object.assign(Object.create({options}), ViewRenderer, this.methods);
    },

    methods: {

        className: 'SearchPage',

        template(options){
            let title;

            if (options.noResults) {
                title = `<h1 id="search-title">No results found</h1>
                <span class="${styles[this.className + '-subtitle']}">Enter another location and search again</span>`;
            } else {
                title = `<h1 id="search-title">Search for houses and flats for sale across the UK</h1>`;
            }

            return title + `
                <form class="${styles[this.className + '-searchForm']}" id="search-form">
                    <input class="${styles[this.className + '-input']}" type="text" id="search-input"/>
                    <button class="${styles[this.className + '-btn']}" type="submit" id="search-btn">Search</button>
                </form>
                `;
        },

        render(options){
            const el = this.initView(styles[this.className]);
            el.innerHTML = this.template(options);
            document.body.appendChild(el);
        },

        focusInput(){
            document.getElementById('search-input').focus();
        },

        onSearch(cb){
            document.getElementById('search-form').addEventListener('submit', (evt) => {
                evt.preventDefault();
                const queryText = document.getElementById('search-input').value;
                cb(queryText);
            }, false);
        }

    }

};
