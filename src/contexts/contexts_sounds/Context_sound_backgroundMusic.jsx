import { createContext } from "react";

export const Context_sound_backgroundMusic = createContext()

export const Context_sound_backgroundMusic_provider = ({children}) => {
    return(
        <Context_sound_backgroundMusic.Provider>
            <audio autoPlay>
                {/* <source src="src/assets/audios/audio_egyptian_music_background.mp3"/> */}
            </audio>
            {children}
        </Context_sound_backgroundMusic.Provider>
    )
}