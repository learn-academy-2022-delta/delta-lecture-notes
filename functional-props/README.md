# FUNCTIONAL PROPS LECTURE NOTES

Functional props are used to pass data "upstream", from child component to parent component.  How do we do this?

First we add a key with an empty value to our state object in App.js. 
    this.state = {
        adultMenu:[ a bunch of strings],
        kidsMenu: [ some more strings],
        plate: []
    }
 The data type of this value depends on the need.  Here, we want it to be an empty array because we will be adding multiple values.

Next we want to make a custom method in our class to see that our click method is capturing the value.  (outside the constructor and above the render method)

	plateOrder = (item) => {
	  alert(item)
	}

Then we pass this method in our component call, along with the menuItems

Once we confirm that the onClick method is working in the child component, we can rewrite the plateOrder method using the spread operator. 

    	plateOrder = (item) => {
	this.setState({ plate: [...this.state.plate, item)}
    }  

# Trouble-shooting points: 
You’ll notice it just keeps refreshing.  We need to tell it ‘hey wait until I click on the button to alert us”  - we do this by adding an Anonymous Function

You will see an error about adding a key.  Keys help React identify which items have changed, are added, or are removed. We will add index to our parameters in our map method.
    {this.state.plate.map((item, index)=> )}

 Then we can add a key in the opening list item tag like this:  
     <li key={index}>{item}</li>


