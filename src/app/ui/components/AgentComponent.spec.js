/* global global, document */
import AgentComponent from "./AgentComponent";

const expect = require('chai').expect;

const jsdom = require('jsdom');
global.document = jsdom.jsdom('<body></body>');
global.window = document.defaultView;

let cheerio = require('cheerio');

const data = {
    address: 'fake address',
    logoUrl: 'fake logo url',
    name: 'fake name',
    phone: 'fake phone'
};

describe('AgentComponent', function () {

    const AgentComponentEl = AgentComponent.render(data);
    const wrapper = document.createElement('div');
    wrapper.appendChild(AgentComponentEl)

    let $ = cheerio.load(wrapper.innerHTML);


    it('should render img', function () {
        const output = $('[data-selector="AgentComponent"]').children().eq(0).find('img').attr('src');
        expect(output).eql(data.logoUrl);
    });

    it('should render name', function () {
        const output = $('[data-selector="AgentComponent"]').children().eq(1).text();
        expect(output).eql(data.name);
    });

    it('should render address', function () {
        const output = $('[data-selector="AgentComponent"]').children().eq(2).text();
        expect(output).eql(data.address);
    });

    it('should render phone', function () {
        const output = $('[data-selector="AgentComponent"]').children().eq(3).text();
        expect(output).eql(data.phone);
    });

});



