import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player name='Player 1' symbol='➕' />
          <Player name='Player 2' symbol='✖️' />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
