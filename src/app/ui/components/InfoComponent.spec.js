import InfoComponent from './InfoComponent';

const expect = require('chai').expect;

const jsdom = require('jsdom');
global.document = jsdom.jsdom('<body></body>');
global.window = document.defaultView;

let cheerio = require('cheerio');

const data = {
    title: 'fake-title',
    description: 'fake-description',
    price: 'fake-price'
};

describe('AgentComponent', function () {

    const InfoComponentEl = InfoComponent.render(data);
    const wrapper = document.createElement('div');
    wrapper.appendChild(InfoComponentEl)

    let $ = cheerio.load(wrapper.innerHTML);


    it('should render title', function () {
        const output = $('[data-selector="InfoComponent"]').children().eq(0).text();
        expect(output).eql(data.title);
    });

    it('should render price', function () {
        const output = $('[data-selector="InfoComponent"]').children().eq(1).children().eq(1).text();
        expect(output).eql(data.price);
    });

    it('should render description', function () {
        const output = $('[data-selector="InfoComponent"]').children().eq(2).text();
        expect(output).eql(data.description);
    });

});



