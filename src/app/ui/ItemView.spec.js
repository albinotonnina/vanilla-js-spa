const expect = require('chai').expect;

const jsdom = require('jsdom');
global.document = jsdom.jsdom('<body></body>');
global.window = document.defaultView;

import PropertyItemFactory from './ItemView';
import PropertyItemModel from '../models/ItemModel';

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

describe('ItemFactory', function () {

    const Model = PropertyItemModel.Model(data).getData();
    const PropertyItem = PropertyItemFactory.Property(Model);

    it('should output a node', function () {
        let PropertyItemEl = PropertyItem.render();
        expect(PropertyItemEl.nodeName).eql('DIV')
    });

    it('should render correctly', function () {
        let PropertyItemEl = PropertyItem.render();


        expect(PropertyItemEl.innerHTML).eql(
            `<figure class="PropertyImage"><img src="fake iamge url"></figure><div class="PropertyInfo"><div class="PropertyInfo-name">5 bedroom fake property type for sale</div>
             <div class="PropertyInfo-description">fake-description</div>
             <div class="PropertyInfo-price">
                <span itemprop="priceCurrency" content="GBP">£</span>
                <span itemprop="price" content="1,800,000.00">1,800,000.00</span>
             </div>
        </div><div class="PropertyAgent"><figure class="PropertyAgent-logo"><img src="fake agent logo"></figure>
            <div class="PropertyAgent-name">fake agent name</div>
            <div class="PropertyAgent-address">fake address, fake postcode</div>
            </div>`
        )
    })

});



