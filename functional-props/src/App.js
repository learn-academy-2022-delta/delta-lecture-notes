import React, { Component } from 'react'
import Menu from './components/Menu.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
       adultMenu: ["Corn on the Cob", "Hot Dogs", "Wine", "Carne Asada"],
       kidsMenu: ["Chicken Nuggets", "Mac and Cheese", "Juice Box", "Fruit Salad"],
       plate: []
    }
  }
  plateOrder = (item) => {
    // spread operator - take whatever is in the array and add selected item
    console.log('before: ', this.state.plate)
    this.setState({ plate: [...this.state.plate, item]})
  }
  render() {
    console.log('after: ', this.state.plate)

    return (
      <>
      <h1>Dirty Delta Dawgs BBQ</h1>
      <h2>Adult Menu</h2>
       {/* create a common variable name (MenuItems) that can take in any set of data to be referenced in the child component and then displayed */}
         <Menu menuItems={this.state.adultMenu} plateOrder={this.plateOrder} />
       <h2>Kids Menu</h2>
         <Menu menuItems={this.state.kidsMenu} plateOrder={this.plateOrder}/>
        <h2> Your plate: </h2>
          <ul>
            {this.state.plate.map((item, index) => {
              // React requires a key for list items so that it know what has been changed/update.  Here we will use index, but in other cases you could use the id, or many other things
              return <li key={index}>{item}</li>
            })}
          </ul>
      </>
      )
  }
}


export default App;