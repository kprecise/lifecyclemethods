# React Lifecycle Methods (React, Webpack, Reactstrap, SASS)
This project demonstrates the use of the following most common React lifecycle methods of React 16 (some will be deprecated and replaced shortly):

## ComponentWillMount
This is called in the main App.js file in the class based component. An API call to fetch the data is made once this lifecycle method is called and the DOM has already rendered. 

Note that this method is to be deprecated as it is not totally reliable for `async` rendering. In future, use `UNSAFE_componentWillMount()`.

## ComponentWillReceiveProps
Within the `content` component, this method is called. Once `nextProps` is populated with the deletion of `photoAlbums,` the state property `receivedProps` is set to true. A green alert box is displayed to show this has happened.

## ComponentDidUpdate
Also in the `content` component, a check is made to see if props.photoAlbums is set to undefined and that previous props (prevProps.photoAlbums) was an object containing the original data before it was deleted. 

### React Components
Two class based components are used; `App` and `Content.` A functional component called `Loading` is alos utilised.

### Webpack (Compiled CSS)
This is already configured to compile SASS to CSS

### Reactstrap
Implementation of Reactstrap for a responsive layout

### Quick Start

``` bash
# Install dependencies
npm install

# Serve on localhost:8080
npm run dev

# Build for production
npm run build
```
### Author

Kyri Kyriacou

### Version

1.1.1

