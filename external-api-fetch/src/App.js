import React, { Component } from 'react'
// import nasaData from './mockNasa.js'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nasa: null,
      pic: null
    }
  }

  componentDidMount() {
    let apiKey = process.env.REACT_APP_MY_NASA_API_KEY
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
    .then(response => response.json())
    .then(payload => {
      console.log(payload)
      this.setState({nasa: payload.photos, pic: payload.photos[0].img_src})
    })
    .catch(error => console.log(error))
  }

  getPic = () => {
    let randomNum = Math.floor(Math.random() * this.state.nasa.length)
    this.setState({pic: this.state.nasa[randomNum].img_src})
  }

  render() {
    console.log(this.state.nasa)
    return (
      <>
        <h1>Mars Rover Pic</h1>
        <button onClick={this.getPic}>Click here</button>
        {this.state.pic &&        
          <img src={this.state.pic} alt="random Mars rover" style={{height: "200px"}}/>
        }
      </>
    )
  }
}

export default App