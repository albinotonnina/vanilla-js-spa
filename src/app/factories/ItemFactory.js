import PropertyInfo from '../ui/PropertyInfo';
import PropertyAgent from '../ui/PropertyAgent';
import PropertyImage from '../ui/PropertyImage';

export default {

    Property(data) {
        return Object.assign(Object.create({
            data
        }), {
            PropertyInfo,
            PropertyAgent,
            PropertyImage
        }, this.methods);
    },

    methods: {

        render() {
            let el = document.createElement('div');
            el.className = 'PropertyItem';
            el.appendChild(this.renderImage());
            el.appendChild(this.renderInfo());
            el.appendChild(this.renderAgent());
            return el;
        },

        renderInfo() {
            return this.PropertyInfo.render(this.data.info);
        },
        renderAgent() {
            return this.PropertyAgent.render(this.data.agent);
        },
        renderImage() {
            return this.PropertyImage.render(this.data.image);
        }
    }

};
