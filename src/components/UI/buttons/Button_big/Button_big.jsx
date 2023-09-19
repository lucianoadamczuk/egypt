import { useRef } from "react"
import "./style.css"
import { Animation_enterAndScale_provider } from "../../../../animations"
import { isDesktop } from "react-device-detect"

export const Button_big = ({text, svg}) => {

    const audioRef = useRef()

    function playAudio(){
        if(isDesktop){
            audioRef.current.play()
        }
    }

    return(
        <article className="Button_big">
            <div className="content" onMouseOver={() => playAudio()}>
                <audio src="/assets/audios/audio_button.mp3" ref={audioRef}></audio>
                <p> {text} </p>
                {svg}
            </div>
        </article>
    )
}