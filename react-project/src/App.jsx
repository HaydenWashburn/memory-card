import "./App.css";
import  Cards  from './components/cards'
function App(props) {
 
  return (
    <div className="App-header">
      <h1>Memory Card Game</h1>
      <div className="container">
      <Cards />

      </div>
    </div>
  );
}

export default App;
