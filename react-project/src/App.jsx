import { Component } from 'react'
import "./App.css";
import  Header  from './components/Header';
import  Game  from './components/Game'

class App extends Component{
constructor(){
  super();

  this.state = {
    items: [],
    currentScore: 0,
    bestScore: 0
  }
}

render(){
  const { currentScore, bestScore } = this.state;

  return(
    <div className='App'>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Game />
    </div>
  )
}
}

export default App;
