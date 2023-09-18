import { createContext } from "react";
import { motion } from "framer-motion"
export const AnimationFadeInAndTranslate = createContext()

export const AnimationFadeInAndTranslate_provider = ({className, children}) => {

    const animationProperties = {
        initial: [
            {translateY: "100"},
            {opacity: 0}
        ],
        transition: {duration: "1", delay: "0.2"},
        whileInView: [
            {translateY: "0"},
            {opacity: 1},
        ],
        viewport: {once: false}
    }

    return(
        <AnimationFadeInAndTranslate.Provider>
            <motion.div 
                className={className}
                initial={animationProperties.initial}
                transition={animationProperties.transition}
                whileInView={animationProperties.whileInView}
                viewport={animationProperties.viewport}
                
                > 
                {children} 
            </motion.div>
        </AnimationFadeInAndTranslate.Provider>
    )
}