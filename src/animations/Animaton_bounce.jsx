import { createContext } from "react";
import { motion, animate } from "framer-motion";

export const Animation_bounce = createContext()

export const Animation_bounce_provider = ({children, className, onClick}) => {

    const animationProps = {
        animate: {translateY: ["-10%", "0%", "-10%"]},
        transition: {duration: 1.5, repeat: "infinite"}
    }

    return(
        <Animation_bounce.Provider>
            <motion.div 
                className={className}
                onClick={onClick}
                animate={animationProps.animate} 
                transition={animationProps.transition}  
            >
                {children}
            </motion.div>
        </Animation_bounce.Provider>
    )
}