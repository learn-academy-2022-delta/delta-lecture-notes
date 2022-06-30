#REACT PROPS NOTES

- React is made up of components.  
- Each component can be reused as many time as we need.
- Each component call instatiates (creates an instance of) the component class
- State: data that we need to manage over time within our application
- to make a component dynamic, we can pass information to that component from the     parent via props (short for properties)
- uniderctional flow ( parent --> child)
- we use curly braces in JSX when we need to do javascript
- props are objects of data that get passed into a component in the component call
   Example: in App.js if state is defined as:
    
       this.state ={
            name: "Spiderman",
            costume: "blue and red onesie"
       }
        and we want to pass the name to another component, we'd do:
         <SuperHero heroName={this.state.name} />

        Then in child Component, SuperHero.js to access the name value, we do:
        <h1>{this.props.heroName}</h1>









