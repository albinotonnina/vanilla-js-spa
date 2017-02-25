const expect = require('chai').expect;

const jsdom = require('jsdom');
global.document = jsdom.jsdom('<body></body>');
global.window = document.defaultView;

import PropertyItemFactory from './ItemFactory';
import PropertyItemModel from '../models/PropertyItemModel';

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

describe('PropertyItemFactory', function () {

    const Model = PropertyItemModel.Model(data).getData();
    const PropertyItem = PropertyItemFactory.Property(Model);

    it('has document', function () {
        let PropertyItemEl = PropertyItem.render();
        expect(PropertyItemEl.nodeName).eql('DIV')
    });

    it('is rendering the right template', function () {
        let PropertyItemEl = PropertyItem.render();

        expect(PropertyItemEl.innerHTML).eql(
            `<div class="PropertyItem-info">
      <div class="PropertyItem-name">5 bedroom fake property type for sale</div>
      <div class="PropertyItem-description">fake-description</div>
      <div class="PropertyItem-price">£ 1,800,000.00</div>
  </div><div class="PropertyItem-agent">
      <div>fake address, fake postcode</div>
  </div>`
        )
    })

});



