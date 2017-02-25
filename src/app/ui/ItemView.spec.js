const expect = require('chai').expect;

const jsdom = require('jsdom');
global.document = jsdom.jsdom('<body></body>');
global.window = document.defaultView;

let cheerio = require('cheerio');

import ItemViewFactory from './ItemView';
import ItemModel from '../state/ItemModel';

const data = {
    num_bedrooms: "5",
    agent_address: "fake address",
    property_type: "fake property type",
    description: "fake-description",
    agent_postcode: "fake postcode",
    details_url: "fake-url",
    price: "1800000",
    agent_name: "fake agent name",
    agent_logo: "fake agent logo",
    agent_phone: "fake agent phone",
    image_url: "fake iamge url"
};

describe('ItemView', function () {

    const Model = ItemModel.Model(data).getData();
    const ItemView = ItemViewFactory.Create(Model);

    it('should have all the objects in place', function () {
        expect(ItemView.AgentComponent instanceof Object).to.be.true;
        expect(ItemView.ImageComponent instanceof Object).to.be.true;
        expect(ItemView.InfoComponent instanceof Object).to.be.true;
        expect(ItemView.data instanceof Object).to.be.true;
    });

    it('should output a node', function () {
        let ItemViewEl = ItemView.render();
        expect(ItemViewEl.nodeName).eql('DIV')
    });

    it('should render correctly', function () {
        const ItemViewEl = ItemView.render();
        const wrapper = document.createElement('div');
        wrapper.appendChild(ItemViewEl);

        let $ = cheerio.load(wrapper.innerHTML);

        expect($('[data-selector="Item"]').children().length).eql(3);
    });

});



