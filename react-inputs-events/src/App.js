import React, { Component } from 'react'
import Capitalize from './components/Capitalize'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      month: "July"
    }
  }

  handleChange = (e) => {
    // Event is an object that has many key:valu pairs
    // One of those keys is called target
    // console.log(e)

    // e.target will show the current tag
    // console.log(e.target)

    // e.target.value gives us the current value inside the input tag.
    // console.log(e.target.value)
    this.setState({ name: e.target.value})
  }

  render() {
    // console.log(this.state.name)
    return (
      <>
        <h1>Greetings!</h1>
        <input 
          type="text" 
          onChange={this.handleChange}
          value={this.state.name}
        />
        <Capitalize name={this.state.name} month={this.state.month}/>
      </>
    )
  }
}

export default App