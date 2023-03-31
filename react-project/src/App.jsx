import {useState} from 'react'
import "./App.css";

const cardImages = [
  {"src": "./public/gryffindor-img.webp"},
  {"src": "./public/hufflepuff-img.png"},
  {"src": "./public/Ravenclaw-img.png"},
  {"src": "./public/slytherin-img.png"}
]

function App(props) {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }
  console.log(cards, turns)
  return (
    <div className="App-header">
  <h1>Magic Match</h1>
  <button onClick ={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
