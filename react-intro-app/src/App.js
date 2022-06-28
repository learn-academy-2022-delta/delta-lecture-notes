import React, { Component } from 'react'
import ClassList from './components/ClassList'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return(
      <>
        <h1>Hello World!</h1>
        <h3 id="delta-heading">Hello Delta</h3>
        <h3 className="header-three">Hello Delta</h3>
        <ClassList />
        <ClassList />
        <ClassList />
        <Footer />
      </>
    )
  }
}

export default App
