import React, { Component } from "react";
import  Prompt  from './Prompt'
const items = [];
for(let i = 65; i<75; i++){
    items.push({
        id: i,
        content:String.fromCharCode(i),
        displayed: false,
});
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items,
    };
  }

  randomItemIndex(){
    let rand = Math.floor(Math.random() * items.length);
    return rand;
  }

  render() {
    const { items } = this.state;
    const item = items[this.randomItemIndex()];

    return (
      <main className="d-flex justify-content-around align-items-center ">
        <p>{item.context}</p>
        <Prompt item = {item} />
      </main>
    );
  }
}

export default Game;
