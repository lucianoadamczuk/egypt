import { useRef } from "react"
import "./style.css"
import { Animation_enterAndScale_provider } from "../../../../animations"

export const Button_big = ({text, svg}) => {

    const audioRef = useRef()

    return(
        <Animation_enterAndScale_provider className="Button_big">
            <div className="content" onMouseOver={() => audioRef.current.play()}>
                <audio src="/assets/audios/audio_button.mp3" ref={audioRef}></audio>
                <p> {text} </p>
                {svg}
            </div>
        </Animation_enterAndScale_provider>
    )
}