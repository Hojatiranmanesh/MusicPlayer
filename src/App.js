import React, { useState } from "react";
import "./style/App.css";
import Songs from "./components/Songs";
import Player from "./components/Player";
import data from "./data";
import SongsList from "./components/SongsList";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const gradient = `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`;
  const appStyle = {
    backgroundImage: gradient,
  };
  
  return (
    <div className="App" style={appStyle}>
      <h1>HOJJAT'S Music Player</h1>
      <Songs currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} setCurrentSong={setCurrentSong}/>
      <SongsList songs={songs} setCurrentSong={setCurrentSong}/>
      <h5>created by HOJJAT IRANMANESH</h5>
    </div>
  );
}

export default App;
