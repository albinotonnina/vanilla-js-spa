export const agentAddressComposerMixin = {

    compose(agent_address, agent_postcode) {
        return agent_address && agent_postcode ? `${agent_address}, ${agent_postcode}` : 'invalid data';
    }
};

export const currencyFormatterMixin = {

    format(amount) {
        return (parseInt(amount) || 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
};

export const propertyTitleComposerMixin = {

    compose(num_bedrooms, property_type) {
        return num_bedrooms && property_type ? `${num_bedrooms} bedroom ${property_type} for sale` : 'invalid data';
    }

};
export const phoneNumberFormatterMixin = {

    format(agent_phone) {
        return agent_phone && agent_phone.length > 0 ? `T: ${agent_phone}` : 'invalid data';
    }

};

