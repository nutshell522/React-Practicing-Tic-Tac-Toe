import Player from "./components/Player";
import GameBaord from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialname="player 1" symbol="X" />
          <Player initialname="player 2" symbol="O" />
        </ol>
        <GameBaord />
      </div>
    </main>
  )
}

export default App
