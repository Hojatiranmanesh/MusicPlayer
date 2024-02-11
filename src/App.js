import React from "react";
import "./style/App.css";
import Songs from "./components/Songs";
import Player from "./components/Player";
import data from "./data"
function App() {
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Songs />
      <Player />
    </div>
  );
}

export default App;
