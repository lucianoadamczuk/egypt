import { createContext } from "react";
import { motion } from "framer-motion"
export const Animation_bounceShadow = createContext()

export const Animation_bounceShadow_provider = ({children, className}) => {

    const animationProps = {
        animate: {scaleX: ["110%", "100%", "110%"]},
        transition: {duration: 1.5, repeat: "infinite"}
    }

    return(
        <Animation_bounceShadow.Provider>
            <motion.div 
                className={className} 
                animate={animationProps.animate}
                transition={animationProps.transition}
            >
                {children}
            </motion.div>
        </Animation_bounceShadow.Provider>
    )
}