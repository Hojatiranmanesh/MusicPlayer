import React , {useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {

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
    return(
        <div className="player">
            <div className="time-control">
                <p>Start time</p>
                <input type="range"/>
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={handlePlaySong} className="play" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} />
            </div>
            <audio ref= {audioRef} src={currentSong.audio}></audio>
        </div>
    );
};

export default Player;