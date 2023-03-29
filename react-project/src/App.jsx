import "./App.css";
import { Component } from 'react';
import Header from "./components/header";
import Game from "./components/game.jsx";
class  App extends Component {
  constructor(){
    super();

    this.state = {
      currentScore: 0,
      bestScore: 0
    }
  }

  render(){
    const { currentScore, bestScore } = this.state;
  return (
    <div className="App">
      <Header currentScore = {currentScore} bestScore = {bestScore} />
      <Game />
    </div>
  )};
}

export default App;
