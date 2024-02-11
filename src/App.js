import React, { useState } from "react";
import "./style/App.css";
import Songs from "./components/Songs";
import Player from "./components/Player";
import data from "./data"
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <h1>HOJJAT'S Music Player</h1>
      <Songs currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </div>
  );
}

export default App;
