export const agentAddressComposerMixin = {

    compose(agent_address, agent_postcode) {
        return agent_address && agent_postcode ? `${agent_address}, ${agent_postcode}`: 'invalid data';
    }

};

export const currencyFormatterMixin = {

    format(currency, amount) {
        const normalizedAmount = parseInt(amount) || 0;
        return currency + " " + normalizedAmount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }

};

export const propertyTitleComposerMixin = {

    compose(num_bedrooms, property_type) {
        return num_bedrooms && property_type ? `${num_bedrooms} bedroom ${property_type} for sale` : 'invalid data';
    }

};

