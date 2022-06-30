import React, { Component } from 'react'


class SuperHero extends Component {

  render() {
    console.log(this.props)
    return (
     <>
      <div>SuperHero</div>
      <h1>{this.props.nicole[this.props.number]}</h1>
      <button onClick={this.props.clickMethod}>Click me!</button>
      </>
    )
  }
}



export default SuperHero;