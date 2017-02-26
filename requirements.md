# Developer test
Create simple Node.js based application that simulates simple search for an area and displays search results.
&nbsp;

Please read through the test description below to fully understand what is required. All assets needed to complete this test are attached.

## Available assets
- JSON data that simulates output from API
- wireframes for 3 different viewports

## Requirements
- proposed user stories are complete
- code is unit tested
- Node.js on the server
- feel free to use test framework of your choice
- accessible via keyboard

## User acceptance criteria
Features below cover all user acceptance criteria from data manipulation, simple functionality and also what is expected to be rendered in the client. For visual guidance please refer to attached wireframes
### Routing
```gherkin
Feature: Application needs to provide basic routing and send all other requests to 404 page

    Scenario: Show not found page
        Given I enter a path in browser's address bar
            And path is not "/search"
            And path is not "/results"
        Then "404" page should be returned
            And page should display "Requested page not found"
```
### Data manipulation
```gherkin
Feature: Data coming from API needs to be updated for correct display in the client.

    Scenario: Create property title
        Given API provides "number of bedrooms"
            And API provides "property type"
        When property title is rendered by client
        Then it needs to print out '"number of bedrooms" bedroom "property type" for sale'

    Scenario: Create agent address
        Given API provides "agent address"
            And API provides "agent postcode"
        When agent address is rendered in the client
        Then it needs to print out '"agent address", "agent postcode"'

    Scenario: Format price
        Given API provides "price"
        When "price" is rendered in the client
        Then it needs to be printed as "£X,XXX,XXX" format
```
### Search functionality
```gherkin
Feature: Users need to be able to search for area by postcode

    Scenario: Search page is displayed
        Given I want to search for properties on the website
        When I visit "/search" page
        Then I am presented with a search field and submit button

    Scenario: Search for area returns results
        Given search page is rendered
            And search field is present
            And submit button is present
        When I enter "N11" postcode to search field
            And I submit search query
        Then I am presented with "results" page showing ordered list of results
            And page shows '"number of results" found'
            And each result contains "property image"
            And each result contains "property title"
            And each result contains "property price"
            And each result contains "property description"
            And each result contains agent data consisting 
            of "agent logo", "agent name", "agent address" and "agent phone number"

    Scenario: Search for an area for which there are no results
        Given search page is rendered
            And search field is present
            And submit button is present
        When I enter "SE1" to search field
            And I submit search query
        Then search page returns message "No results found"
            And search search field is shown
            And submit button is shown
```
### Rendering in client
```gherkin
Feature: Search results page needs to be responsive and support 3 different viewports

    Scenario: Small screen user
        Given a search was performed for "N11"
        When "results" page renders ordered list of results for given search term
        Then each result occupies full width of the screen
            And each result's items occupy full width of the screen
            And each result's items are left aligned

    Scenario: Medium size screen user
        Given a search was performed for "N11"
        When "results" page renders ordered list of results for given search term
        Then each result is split into 2 rows
            And first row is split into 2 equally wide columns
            And first column renders "property image"
            And second column renders "property title" followed by "property price" and "property description"
            And last row occupies full width
            And contains "agent logo" followed by "agent name", "agent address" and "agent phone number"

    Scenario: Large screen user
        Given a search was performed for "N11"
        When "results" page renders ordered list of results for given search term
        Then each result is split into 3 columns
            And first column renders "property image"
            And second column renders "property title" followed by "property price" and "property description"
            And last column renders "agent logo" followed by "agent name", "agent address" 
            and "agent phone number"
```

## Final notes
Please let us know if you liked the test and how long it took you to complete it. 
 