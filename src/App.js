import "./App.css";
import SelectMusicClass from "./SelectMusicClass";
import SelectMusic from "./SelectMusic";

function App() {
  return (
    <div className="music-selector">
      <header>
        <h1>My Music Selector</h1>
        <h2>What shall I listen to now?</h2>
      </header>
      {/* <SelectMusicClass /> */}
      <SelectMusic />
    </div>
  );
}

export default App;
