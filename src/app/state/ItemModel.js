import {
  agentAddressComposerMixin,
  currencyFormatterMixin,
  propertyTitleComposerMixin,
  phoneNumberFormatterMixin
} from './mixins';

export default {

    Model(data = {
        num_bedrooms: '',
        agent_address: '',
        property_type: '',
        description: '',
        agent_postcode: '',
        details_url: '',
        price: '',
        agent_name: '',
        agent_logo: '',
        agent_phone: '',
        image_url: ''
    }) {
        return Object.assign(Object.create({data}), {
            currencyFormatter: currencyFormatterMixin,
            titleComposer: propertyTitleComposerMixin,
            agentAddressComposer: agentAddressComposerMixin,
            phoneNumberFormatter: phoneNumberFormatterMixin
        }, this.methods);
    },

    methods: {

        getData() {
            return {

                info: {
                    title: this.titleComposer.compose(this.data.num_bedrooms, this.data.property_type),
                    description: this.data.description,
                    price: this.currencyFormatter.format(this.data.price)
                },
                agent: {
                    address: this.agentAddressComposer.compose(this.data.agent_address, this.data.agent_postcode),
                    name: this.data.agent_name,
                    logoUrl: this.data.agent_logo,
                    phone: this.phoneNumberFormatter.format(this.data.agent_phone)
                },
                image: {
                    imageUrl: this.data.image_url
                }
            };
        }
    }

};
