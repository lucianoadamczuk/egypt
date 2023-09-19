import { useEffect, useRef, useState } from "react"
import { Icon_pause, Icon_play } from "../../../icons"
import { Animation_bounce_provider} from "../../../animations"

import "./style.css"
import { isDesktop, isMobile } from "react-device-detect"

export const Widget_activateSounds = () => {

    const [isPlaying, setIsPlaying] = useState(true)

    const audioRef = useRef()

    function buttonInteraction(){
        if(isPlaying){
            audioRef.current.pause()
        }else{
            audioRef.current.play()
        }
    }

    useEffect(() => {
        if(isDesktop){
            buttonInteraction()
        }
    }, [isPlaying])
    


    
    if(isMobile){
        <div></div>
    }

    if(isDesktop){
        return(
            <Animation_bounce_provider
                className=" Widget_activateSounds"
                onClick={() => { setIsPlaying(!isPlaying) }}
            >
                <audio ref={audioRef} src="/assets/audios/audio_egyptian_music_background.mp3"></audio>
                {
                    isPlaying ? 
                        <Icon_play/>
                            :
                        <Icon_pause/>
                }
            </Animation_bounce_provider>
        )
    }
}