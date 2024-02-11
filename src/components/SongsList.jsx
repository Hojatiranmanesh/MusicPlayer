import React from 'react'
import SongListItem from './SongListItem'

function SongsList({songs,setCurrentSong}) {
  return (
    <div className='Songs-List'>
        <h2>List of Songs</h2>
        <div className="song-list-items">
            {songs.map(song =>(
                <SongListItem key={song.id} song={song} setCurrentSong={setCurrentSong}/>
                ))}
        </div>
    </div>
  )
}

export default SongsList