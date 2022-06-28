import React, { Component } from 'react'
import Tracker from './components/Tracker'
import './App.css'

export class App extends Component {
  render() {
    return (
      <>
        <h2>Mile Tracker</h2>
        <h3>January</h3>
        <Tracker />
        <h3>February</h3>
        <Tracker />
        <h3>March</h3>
        <Tracker />
      </>
    )
  }
}

export default App