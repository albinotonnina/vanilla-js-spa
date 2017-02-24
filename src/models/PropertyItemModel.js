import {agentAddressComposerMixin, currencyFormatterMixin, propertyTitleComposerMixin} from '../mixins/index';

export default {

    Model(data = {
        num_bedrooms:"",
        agent_address:"",
        property_type:"",
        description:"",
        agent_postcode:"",
        details_url:"",
        price:"",
        agent_name:"",
        agent_logo:"",
        agent_phone:"",
        image_url:""
    }) {

        return Object.assign(Object.create({
            data
        }), {
            currencyFormatter: currencyFormatterMixin,
            titleComposer: propertyTitleComposerMixin,
            agentAddressComposer: agentAddressComposerMixin
        }, this.methods);
    },

    methods: {

        getData() {

            return {

                info: {
                    title: this.titleComposer.compose(this.data.num_bedrooms,this.data.property_type),
                    description: this.data.description,
                    price: this.currencyFormatter.format('£', this.data.price)
                },
                agent: {
                    agentAddress: this.agentAddressComposer.compose(this.data.agent_address, this.data.agent_postcode)
                }
            }
        }
    }

};
