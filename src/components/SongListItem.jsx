import React from 'react'

function SongListItem({song,setCurrentSong}) {
  return (
    <div onClick={() => setCurrentSong(song)} className="song-item">
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
              <h3>{song.name}</h3>
              <h4>{song.artist}</h4>
            </div>
        </div>
  )
}

export default SongListItem