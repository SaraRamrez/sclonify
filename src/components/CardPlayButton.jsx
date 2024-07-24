import {Pause, Play} from "./Player.jsx"
import { usePlayerStore } from "../store/playerStore.js"

export function CardPlayButton ({ id }) {
    const {
        currentMusic, 
        isPlaying, 
        setIsPlaying, 
        setCurrentMusic ,
    } = usePlayerStore(state => state)

    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4 ">
            {isPlaying ? <Pause /> : <Play />}             
        </button>

    )

}