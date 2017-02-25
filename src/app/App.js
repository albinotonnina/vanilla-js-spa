import SearchView from './ui/SearchView';
import ResultsView from './ui/ResultsView';
import ItemCollection from './state/ItemCollection';
import './styles/App.scss';

export default {

    Create() {
        return Object.assign(Object.create(null), this.methods);
    },

    methods: {

        searchView: undefined,

        init(){
            this.showSearchView();

            window.onpopstate = () => {
                this.showSearchView();
            };
        },

        showSearchView(options = {noResults: false}){
            history.pushState(null, null, "/search");

            const searchView = SearchView.View();
            searchView.render(options);

            searchView.onSearch((query) => {
                this.doSearch(query);
            });
        },

        doSearch(query = ''){
            ItemCollection.Create().search(query).then(models => {
                if (models.length > 0) {
                    this.showResultsView(models);
                } else {
                    this.showSearchView({noResults: true});
                }
            });
        },

        showResultsView(models){
            history.pushState(null, null, "/results");

            const resultsView = ResultsView.View();
            resultsView.render(models);
        }

    }

}




