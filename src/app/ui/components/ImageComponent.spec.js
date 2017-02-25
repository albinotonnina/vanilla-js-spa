import ImageComponent from './ImageComponent';

const expect = require('chai').expect;

const jsdom = require('jsdom');
global.document = jsdom.jsdom('<body></body>');
global.window = document.defaultView;

let cheerio = require('cheerio');

const data = {
    imageUrl: 'fake image url'
};

describe('ImageComponent', function () {

    const ImageComponentEl = ImageComponent.render(data);
    const wrapper = document.createElement('div');
    wrapper.appendChild(ImageComponentEl)

    let $ = cheerio.load(wrapper.innerHTML);


    it('should render img', function () {
        const output = $('figure').find('img').attr('src');
        expect(output).eql(data.imageUrl);
    });

});



