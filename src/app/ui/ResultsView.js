import ItemViewFactory from './ItemView';
import {ViewRenderer} from './mixins';
import styles from './ResultsView.scss';

export default {

    View(data) {
        return Object.assign(Object.create({
            data
        }), ViewRenderer, this.methods);
    },

    methods: {

        className: 'ResultsPage',

        template(result_count){
            return `<span class="${styles[this.className + '-result_count']}" >${result_count} results found</span>`;
        },

        render(models){
            const el = this.initView(styles[this.className]);

            const div = document.createElement('div');
            div.innerHTML = this.template(models.length);
            el.appendChild(div);

            const resultsContainer = document.createElement('div');
            el.appendChild(resultsContainer);

            for (const model of models) {
                const ItemView = ItemViewFactory.Create(model.getData());
                const ItemViewEl = ItemView.render();
                resultsContainer.appendChild(ItemViewEl);
            }
        }

    }

};
