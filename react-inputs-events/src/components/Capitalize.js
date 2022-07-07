import React, { Component } from 'react'

class Capitalize extends Component {

  capitalize = (userInput) => {
    return userInput.toUpperCase()
  }

  render() {
    // console.log(this.props.name)
    // console.log(this.capitalize(this.props.name))
    return (
      <>
        <h3>I SEE YOUR NAME IS:</h3>
        <p>{this.capitalize(this.props.name)}</p>
        <p>{this.capitalize(this.props.month)}</p>
      </>
    )
  }
}

export default Capitalize