const expect = require('chai').expect;

const jsdom = require('jsdom');
global.document = jsdom.jsdom('<body></body>');
global.window = document.defaultView;

import SearchView from "./SearchView";

describe('SearchVIew', function () {

    it('should call the passed function with the user search query', function () {

        const searchView = SearchView.View();

        searchView.render({
            noResults: false
        });

        const testQuery = 'fake val';
        let returnedQuery;

        searchView.onSearch((query) => {
            returnedQuery = query;
        });

        document.getElementById('search-input').value = testQuery;

        const clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('click', true, true);
        document.getElementById('search-btn').dispatchEvent(clickEvent);

        expect(returnedQuery).eql(testQuery);
    });

    it('should show the default title', function () {

        const searchView = SearchView.View();

        searchView.render({
            noResults: false
        });

        expect(document.getElementById('search-title').textContent).eql('Search for houses and flats for sale across the UK');
    });


    it('should show the no results found title', function () {

        const searchView = SearchView.View();

        searchView.render({
            noResults: true
        });

        expect(document.getElementById('search-title').textContent).eql('No results found');
    });
});



