import React , {useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Player = ({currentSong, isPlaying, setIsPlaying ,songs,setCurrentSong}) => {

    const audioRef = useRef(null);
    const handlePlaySong = () => {
        const audio = audioRef.current;
        if( isPlaying ){
            audio.pause();
            setIsPlaying(!isPlaying);
        }else{
            audio.play();
            setIsPlaying(!isPlaying);
        }
    };

    const timeUpdateHandle = () => {
        const audio = audioRef.current;
        setSongInfo({
            ...songInfo,
            currentTime: audio.currentTime,
            duration: audio.duration,
        });
    };

    const TimeFormat = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    const handleDrag = (e) =>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    } 

    const skipSongs = (dir) =>{
        const indexCurrent = songs.findIndex((item)=> item.id === currentSong.id);
        if(dir === "next"){
            if(indexCurrent === songs.length-1){
                setCurrentSong(songs[0]); 
            }else{
                setCurrentSong(songs[indexCurrent + 1]);
            }
        }
        if(dir === "back"){
            if(indexCurrent === 0){
                setCurrentSong(songs[songs.length - 1]); 
            }else{
                setCurrentSong(songs[indexCurrent -1 ]);
            }
        }
    }
    return(
        <div className="player">
            <div className="time-control">
                <p>{TimeFormat(songInfo.currentTime)}</p>
                <input onChange={handleDrag} min= {0} max={songInfo.duration} value={songInfo.currentTime} type="range"/>
                <p>{TimeFormat(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={()=> skipSongs("back")} className="skip-back" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={handlePlaySong} className="play" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={()=> skipSongs("next")} className="skip-forward" icon={faAngleRight} />
            </div>
            <audio onLoadedMetadata={timeUpdateHandle} onTimeUpdate={timeUpdateHandle} ref= {audioRef} src={currentSong.audio}></audio>
        </div>
    );
};

export default Player;