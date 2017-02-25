import InfoComponent from './components/InfoComponent';
import AgentComponent from './components/AgentComponent';
import ImageComponent from './components/ImageComponent';
import styles from './styles/ItemView.scss';

export default {

    Property(data) {
        return Object.assign(Object.create({
            data
        }), {
            InfoComponent,
            AgentComponent,
            ImageComponent
        }, this.methods);
    },

    methods: {

        className: 'ItemView',

        render() {
            let el = document.createElement('div');
            el.className = styles[this.className];
            el.appendChild(this.renderImage());
            el.appendChild(this.renderInfo());
            el.appendChild(this.renderAgent());
            return el;
        },

        renderInfo() {
            return this.InfoComponent.render(this.data.info);
        },

        renderAgent() {
            return this.AgentComponent.render(this.data.agent);
        },

        renderImage() {
            return this.ImageComponent.render(this.data.image);
        }
    }

};
