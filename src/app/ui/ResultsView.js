import ItemFactory from './ItemView';
import {ViewRenderer} from './mixins';
import styles from './styles/ResultsView.scss';

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
            div.className = styles[this.className + '-resultCountContainer'];
            div.innerHTML = this.template(models.length);
            el.appendChild(div);

            const resultsContainer = document.createElement('div');
            resultsContainer.className = styles[this.className + '-resultContainer'];
            el.appendChild(resultsContainer);

            for (const model of models) {
                const PropertyItem = ItemFactory.Property(model.getData());
                const PropertyItemEl = PropertyItem.render();
                resultsContainer.appendChild(PropertyItemEl);
            }
        }

    }

};
