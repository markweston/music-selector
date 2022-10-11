import "./App.css";
// import SelectMusicClass from "./SelectMusicClass";
import SelectMusic from "./SelectMusic";

function App() {
  return (
    <div className="music-selector">
      <a href="http://www.last.fm/api/auth/?api_key=1af931d4ae450156c121bc0b8db3f973&cb=https://music-selector-git-develop-markweston.vercel.app/">
        Allow Access
      </a>
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
