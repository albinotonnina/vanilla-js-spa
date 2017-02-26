/* global history, window */
import SearchView from "./ui/SearchView";
import ResultsView from "./ui/ResultsView";
import ItemCollection from "./state/ItemCollection";
import "./styles/App.scss";

export default {

    Create() {
        return Object.assign(Object.create(null), this.methods);
    },

    methods: {

        init() {
            this.showSearchView();

            window.onpopstate = () => {
                this.showSearchView();
            };
        },

        showSearchView(options = {noResults: false}){
            this.route('search');

            const searchView = SearchView.View();
            searchView.render(options);
            searchView.focusInput();

            searchView.onSearch((query) => {
                this.doSearch(query);
            });
        },

        showResultsView(models){
            this.route('results');
            ResultsView.View().render(models);
        },

        doSearch(query = ''){
            ItemCollection.Create().search(query).then((models) => {
                if (models.length > 0) {
                    this.showResultsView(models);
                } else {
                    this.showSearchView({noResults: true});
                }
            }).catch((err) => {
                throw err;
            });
        },

        route(route){
            history.pushState(null, null, `/${route}/`);
        }

    }

};
