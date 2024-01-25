import { createContext } from "react";
import {motion} from "framer-motion"
export const Animation_enterAndScale = createContext()

export const Animation_enterAndScale_provider = ({className, children}) => {

    const animationProperties = {
        initial: [
            {opacity: 0},
            {scale: "60%"}
        ],
        whileInView: [
            {opacity: 1},
            {scale: "100%"}
        ],
        transition: {duration: 1, delay: 0.2, ease: "linear"},
    }

    return(
        <Animation_enterAndScale.Provider>
            <motion.div
                className={className}
                initial={animationProperties.initial}
                whileInView={animationProperties.whileInView}
                transition={animationProperties.transition}
            >
                {children}
            </motion.div>
        </Animation_enterAndScale.Provider>
    )
}