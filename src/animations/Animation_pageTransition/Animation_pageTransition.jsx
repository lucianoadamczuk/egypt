import { createContext, useEffect, useRef } from "react";
import { motion } from "framer-motion"
import "./style.css"
import { useLocation } from "react-router-dom";

export const Animation_pageTransition = createContext()

export const Animation_pageTransition_provider = ({children, className}) => {


    const animationSandStorm_1 = {
        initial: [
            {opacity: 1},
            {left: "-10%"}
        ],
        whileInView: [
            {opacity: 0},
            {left: "0%"}
        ],
        transition: {duration: 2},
        viewport: {once: true}
    }

    const animationSandStorm_2 = {
        initial: [
            {opacity: 1},
            {left: "-30%"}
        ],
        whileInView: [
            {opacity: 0},
            {left: "0%"}
        ],
        transition: {duration: 3},
        viewport: {once: true}
    }

    const animationSandStorm_3 = {
        initial: [
            {opacity: 1},
            {left: "-12%"}
        ],
        whileInView: [
            {opacity: 0},
            {left: "0%"}
        ],
        transition: {duration: 2},
        viewport: {once: true}
    }

    const pathname = useLocation()
    const audioRef = useRef()
    
    useEffect(() => {
        audioRef.current.play()
    }, [pathname.pathname])
    

    return(
        <Animation_pageTransition.Provider>
            <div 
                className={` ${className} Animation_pageTransition `}
            >
                <audio src="src/assets/audios/audio_wind.mp3" ref={audioRef}></audio>
                <motion.div 
                    className="sand-storm-1"
                    initial={animationSandStorm_1.initial}
                    whileInView={animationSandStorm_1.whileInView}
                    transition={animationSandStorm_1.transition}
                    viewport={animationSandStorm_1.viewport}
                />

                <motion.div 
                    className="sand-storm-2"
                    initial={animationSandStorm_2.initial}
                    whileInView={animationSandStorm_2.whileInView}
                    transition={animationSandStorm_2.transition}
                    viewport={animationSandStorm_2.viewport}    
                />

                <motion.div 
                    className="sand-storm-3"
                    initial={animationSandStorm_3.initial}
                    whileInView={animationSandStorm_3.whileInView}
                    transition={animationSandStorm_3.transition}
                    viewport={animationSandStorm_3.viewport}    
                />
                {children}
            </div>
        </Animation_pageTransition.Provider>
    )
}