import React, { Component } from "react";
import SuperHero from "./components/SuperHero";

class App extends Component {
  //Goal:  displays a random superhero name on a click.
  constructor(props) {
    super(props);
    this.state = {
      heroArray: [
        "Spiderman",
        "Thor",
        "Ironman",
        "Deadpool",
        "Batman",
        "Avatar",
        "StaticShock",
        "Superman",
        "Captain Marvel",
        "Wonder Woman",
        "Black Widow",
      ],
      randomHero: 0,
    };
  }

  handleClick = () => {
    // generate a random number between 0 and length of array
    let randomNum = Math.floor(Math.random() * this.state.heroArray.length);
    // here we update the state property randomHero = generated random number
    //this.setState does not need a return
    this.setState({ randomHero: randomNum });
  };

  //part 2 - creating a method that will take some input (click) and return a change in our state object.

  render() {
    //curly braces show us we are using javascript in JSX
    return (
      <>
        <SuperHero
          nicole={this.state.heroArray}
          number={this.state.randomHero}
          clickMethod={this.handleClick}
        />
      </>
    );
  }
}

export default App;
