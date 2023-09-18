import { useContext, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Context_buttonMenu } from "../../../../contexts"

import "./style.css"


export const Button_menu = ({onClick}) => {

    const {isMenuOpen, setIsMenuOpen} = useContext(Context_buttonMenu)

    const [animationsProperties_topStick, setAnimationsProperties_topStick] = useState([])
    const [animationsProperties_centralStick, setAnimationsProperties_centralStick] = useState([])
    const [animationsProperties_bottomStick, setAnimationsProperties_bottomStick] = useState([])

    useEffect(() => {
        if(isMenuOpen){
            // stick on top            
            setAnimationsProperties_topStick({
                initial: [
                    {top: "0"},
                ],
                animate: [
                    {top: "50%"},
                ]
            })
            // stick on center
            setAnimationsProperties_centralStick({
                initial: [
                    {right: "0px"},
                    {opacity: 1}
                ],
                animate: [
                    {right: "100px"},
                    {opacity: 0}
                ]
            })
            // stick on bottomw
            setAnimationsProperties_bottomStick({
                initial: [
                    {top: "0"},
                ],
                animate: [
                    {top: "50%"},
                ]
            })

        } else{
            // stick on top        
            setAnimationsProperties_topStick({
                initial: [
                    {},
                ],
                animate: [
                    {top: "10%"},
                ]
            })
            // stick on center
            setAnimationsProperties_centralStick({
                initial: [
                    {right: "100px"},
                    {opacity: 0}
                ],
                animate: [
                    {right: "0px"},
                    {opacity: 1}
                ]
            })
            // stick on bottomw
            setAnimationsProperties_bottomStick({
                initial: [
                    {},
                ],
                animate: [
                    {top: "90%"},
                ]
            })
        }
    }, [isMenuOpen])
    

    return(
        <div className="Button_menu" onClick={() => { setIsMenuOpen(!isMenuOpen), onClick() } }>
                <motion.div 
                    className="stick stick-1"
                    initial={animationsProperties_topStick.initial}
                    animate={animationsProperties_topStick.animate}
                />
                <motion.div 
                    className="stick stick-2"
                    initial={animationsProperties_centralStick.initial}
                    animate={animationsProperties_centralStick.animate}
                />

                <motion.div className="stick stick-3"
                    initial={animationsProperties_bottomStick.initial}
                    animate={animationsProperties_bottomStick.animate}
                />
        </div>
    )
}