## Instructions

Install

`npm install`

Build and launch

`npm start`

Test

`npm test`

Development

`npm run dev`
 (just nodemon watching for changes and relaunching npm start)


## Entry point

`http://localhost:9000/search`

## Notes

Tested in IE 10+, Chrome, Firefox, Safari

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

Principles and rules from [Bandit](http://bandit-css.herokuapp.com) methodology.

- Encapsulate module styles using a unique selector prefix
- Flat hierarchy of class based selectors
- Use variables for everything
- No key selectors outside the module they belong to
- Don’t nest selectors when it’s not necessary
- Avoid type selectors
