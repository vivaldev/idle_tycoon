import React, { useState, useReducer } from "react";
import "./App.css";

const initialState = function App() {
  const [startedGame, setStartedGame] = useState(false);
  const [playerNameInput, setPlayerNameInput] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleNameInput(event) {
    setPlayerNameInput(event.target.value);
  }

  function handleStartGame(e) {
    e.preventDefault();
    setStartedGame((prevBool) => !prevBool);
  }

  return (
    <div className="App flex-column centered">
      <div className="container flex-column centered">
        <h1>Idle Tycoon</h1>
        <form className="flex-column centered" onSubmit={handleStartGame}>
          <label htmlFor="playerName">
            Player 1:
            <input
              type="text"
              className="playerName"
              name="playerName"
              placeholder="Username..."
              onChange={handleNameInput}
            />
          </label>

          <button type="submit" className="startGameBtn">
            Start Game
          </button>
        </form>
      </div>

      {startedGame && (
        <div className="container flex-column centered">
          <h1>Click the button to get gold!</h1>
        </div>
      )}
    </div>
  );
};

export default App;
