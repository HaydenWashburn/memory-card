import { useState } from 'react'
import "./App.css";
import Header from "./components/header";
import Game from './components/game'

function App(){

let [items, setItems] = useState([])
let [currentScore, setCurrentScore] = useState(0)
let [bestScore, setBestScore] = useState(0)



function handleScore(increment){
  if(increment){
    setCurrentScore(
      currentScore + 1,
    )
  } else {
    if(currentScore>bestScore){
      setBestScore(currentScore)
    }
    setCurrentScore(0)

  }
}

  return(
    <div className='App'>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Game handleScore={handleScore} />
    </div>
  )
}


export default App;
