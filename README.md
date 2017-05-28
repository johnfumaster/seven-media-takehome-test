# Seven Media Take Home Test README

## Bottom Line Up Front
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## The assignment
Utilise React `styled-components` on a simple React view to resemble something like:

![composite.jpg](Assignment/composite.jpg)
 
## Assumptions
* A single React component will be created
* The component will take in the following props.  
    * Logo source - e.g. logo.png
    * Image source - e.g. tile.jpg
    * Image description - Steve Peacocke, Dan Ewing, Johnny Ruffo, Bonnie Sveen 
    * Show name - e.g. Home and Away
    * Display logo - e.g. true/false
    * Link URL - e.g. https://au.tv.yahoo.com/home-and-away/
* Tile will click thru to a supplied URL, eg. the show's official page.
* Data for the tile is got from a data source asynchronously.
* Browser supports flexbox

### Packages used
* Axios - For getting data
* React-Router-DOM - for routing
* DD-Breakpoints - Responsive breakpoints by Deloitte Digital - more lightweight than Bootstrap.
* Normalize CSS - for normalizing standard elements

## How to run
### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build` or `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!