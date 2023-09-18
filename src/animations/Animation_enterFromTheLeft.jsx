import { createContext } from "react";
import { motion } from "framer-motion"
export const Animation_enterFromTheLeft = createContext()

export const Animation_enterFromTheLeft_provider = ({className, children}) => {

    const animationProperties = {
        initial: [ 
            {opacity: 0}, 
            {translateX: "-60%"}
        ],
        whileInView: [
            {opacity: 1},
            {translateX: "0%"}
        ],
        transition: {duration: 0.8, delay: 0.1}
    }

    return(
        <Animation_enterFromTheLeft.Provider>
            <motion.div 
                className={className}
                initial={animationProperties.initial}
                whileInView={animationProperties.whileInView}
                transition={animationProperties.transition}
            > 
                {children} 
            </motion.div>
        </Animation_enterFromTheLeft.Provider>
    )
}