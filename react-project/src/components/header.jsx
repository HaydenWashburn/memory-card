import { useState } from "react";

function Header(props) {

    const [currentScore, setCurrentScore] = useState()
    const [bestScore, setBestScore ] = useState();
    return (
      <header className="App-header">
        <h1>Memory Game</h1>
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <p>Current Score</p>
            <p>{currentScore}</p>
          </div>
          <div>
            <p>Best Score</p>
            <p>{bestScore}</p>
          </div>
        </div>
      </header>
    );
  }


export default Header;
