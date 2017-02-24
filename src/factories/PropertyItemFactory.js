import PropertyInfoProto from '../components/PropertyInfo';
import PropertyAgentProto from '../components/PropertyAgent';


export default {

    Property(data) {
        return Object.assign(Object.create({
            data
        }), {
            propertyInfo: PropertyInfoProto,
            propertyAgent: PropertyAgentProto
        }, this.methods);
    },

    methods: {

        render() {
            const info = this.renderInfo();
            const agent = this.renderAgent();

            let el = document.createElement('div');
            el.className = 'PropertyItem';
            el.appendChild(info);
            el.appendChild(agent);
            return el;
        },

        renderInfo() {
            return this.propertyInfo.render(this.data.info);
        },
        renderAgent() {
            return this.propertyAgent.render(this.data.agent);
        }
    }

};
