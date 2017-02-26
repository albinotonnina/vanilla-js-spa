# Developer test
Create simple Node.js based application that simulates simple search for an area and displays search results.

See **requirements.md**.

Testee: Albino Tonnina [website](http://www.albinotonnina.com) - [GitHub](https://github.com/albinotonnina/) - [Email](mailto:albinotonnina@gmail.com)


## Requirements
- proposed user stories are complete
- code is unit tested
- Node.js on the server
- feel free to use test framework of your choice
- accessible via keyboard

##Instructions
Install 

`npm install`

Build and launch

`npm start`

Test

`npm test`

Development

`npm run dev` 
 (just nodemon watching for changes and relaunching npm start)


##Entry point

The index, as per instructed, returns a 404. To start, point to:

`http://localhost:9000/search`

## Notes
**I had fun doing this test**. Of course this is not the way I would write code for production. However the structure (probably over-complicated for such a small feature) should reflect how I would work in a large scale app. This could have been done in many ways, I choose to write it with simple objects and plain Javascript and some APIs, such as `fetch` (Damn IE that doesn't support it natively!).

It took me around 2 nights and some other spare time here and there.

Tested in IE 10+, Chrome, Firefox, Safari

about the requirement: **accessible via keyboard**
I'm afraid I'm not sure I understood the requirement completely so what I did is:

- add a simple tabIndex to the item divs in the results page.
- make sure to start the search using the `Enter` key
- Autofocus on the search input when loading the view

Thank you for the opportunity.

## SPA

- No frameworks
- No libraries
- No template systems. 
- Express for the server
- ES6
- No classes, I wanted to play this with plain objects and factories
- Polyfills from polyfill.io cdn
- Webpack

## Testing & linting

- Mocha with Babel
- Chai Expect
- Eslint


## Styling

I applied some of the principles and rules I came up with my [Bandit](http://bandit-css.herokuapp.com) methodology. 

- Encapsulate module styles using a unique selector prefix
- Flat hierarchy of class based selectors
- Use variables for everything
- No key selectors outside the module they belong to
- Don’t nest selectors when it’s not necessary
- Avoid type selectors

Also I used Sass to compose the selectors.
