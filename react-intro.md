# React Intro 6/27/2022

A JavaScript library for building user interfaces.

- Library - collection of code snippets
- JavaScript library - code snippets are node modules
- Package manager - yarn, organizes and manages the node modules

### Scalable
- thinking about how your app will grow
- React was created so Facebook could scale

### React
- reusable
- handle user interactions

### Reusable
- Components
  - classes are reusable
  - classes are instantiated to create objects
    - objects have data (some kind of data type) and behavior (method)

### User Interactions
- Virtual DOM - listening for a diff, identify which HTML tags were affected, update only the tags that need to be updated
  - Node - HTML tags when looking at the code through the lens of the DOM (named after a tree, leaves, etc)
  - DOM - document object model, visual representation of your code


### React Components
- classes, inheritance
- render method, return
- inside the return is markup - JSX (JavaScript XML) combo of HTML and JavaScript
- instantiating a React component: <HelloReact />


### Errors?
- Look in the console
  - JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
  - Fragments - empty opening and closing tags that don't create an additional node in the DOM
