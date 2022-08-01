# External API with Fetch

Fetch - a tool that allows for asynchronous requests
- Javascript is single threaded - only does one thing at a time
- Fetch allows the app to multitask
- Fetch - sends a request and waits for a response
- Fetch returns a Promise
- A promise as three states: pending, fulfilled, rejected
- Promises are Javascript objects


```javascript
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipAddress: {}
    }
  }

  getIP = () => {
    // Use fetch method to call on api endpoint
    fetch("https://ipapi.co/json/")
    // Use .then to check the response from the api call and set to json. This will give us a fulfilled or rejected state.
    .then(response => response.json())
    // We then using .then want to handle the payload which will be an object and set to state.
    .then(payload => this.setState({ipAddress: payload}))
    // If the response is rejected, catch will show an error.
    .catch(error => console.log(error))
  }

  render() {
    // console logging what is currently in state (this shows the payload object)
    console.log(this.state.ipAddress)
    return (
      <>
        <h1>Find Your IP Address</h1>
        {/* The button will trigger the getIP method which contains the fetch call */}
        <button onClick={this.getIP}>Click here to see your IP address</button>
        {/* Displaying specific key value pairs inside of state */}
        <p>IP: {this.state.ipAddress.ip}</p>
        <p>Location: {this.state.ipAddress.city}, {this.state.ipAddress.region_code}</p>
      </>
    )
  }
}

export default App

```