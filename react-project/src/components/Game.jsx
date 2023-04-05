import  { useState } from "react";
import Prompt from "./Prompt";


const DEFAULT_ITEMS = [];
for (let i = 65; i < 75; i++) {
  DEFAULT_ITEMS.push({
    id: i,
    content: String.fromCharCode(i),
    displayed: false,
  });
}

function Game(props) {
let [items, setItems] = useState(DEFAULT_ITEMS)


  function handleAnswer(event, item, index, answer) {
    props.handleScore(item.displayed === answer);

    const updatedItems = items.map((i) => {
      if (i === item){
        i.displayed = true;
        return i;
    } else return i;
    });
    setItems( updatedItems);
  }

  function randomItemIndex() {
    let rand = Math.floor(Math.random() * items.length);
    return rand;
  }

  
    const index = randomItemIndex();
    const item = items[index];

    return (
      <main className="d-flex justify-content-around align-items-center ">
        <p id={items.indexOf(item)}>{item.content}</p>
        <Prompt item={item} index={index} handleAnswer={handleAnswer} />
      </main>
    );
  }


export default Game;
