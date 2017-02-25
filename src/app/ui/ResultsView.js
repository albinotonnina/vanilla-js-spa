import ItemCollection from '../models/ItemCollection';
import ItemFactory from '../factories/ItemFactory';
import {ViewRenderer} from './mixins';

export default {

    View(data) {
        return Object.assign(Object.create({
            data
        }), ViewRenderer, this.methods);
    },

    methods: {

        initSearch(query = '') {

            ItemCollection.Create().search(query).then(models => {
                this.showResults(models);
            });
        },

        showResults(models){
            history.pushState({page: 'results'}, "Results", "/results");
            const el = this.initView('ResultsPage');

            for (const model of models) {
                const PropertyItem = ItemFactory.Property(model.getData());
                const PropertyItemEl = PropertyItem.render();
                el.appendChild(PropertyItemEl);
            }
        }

    }

};
