
import { Icon_arrow } from "../../../icons"
import "./style.css"
import { useRef} from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { Animation_enterAndScale_provider } from "../../../animations"
import { isDesktop } from "react-device-detect"


export const Header = () => {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const animate_pyramid_front = useTransform(scrollYProgress, [0.1, 1], ["0%", "40%"])
    const animate_pyramid_back = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    const animate_text = useTransform(scrollYProgress, [0, 0.6], ["0%", "80%"])

    const animate_ground_main = useTransform(scrollYProgress, [0.5, 1], ["0%", "10%"])
    const animate_ground = useTransform(scrollYProgress, [0.4, 1], ["0%", "20%"])

    const animate_sky = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    const animate_rotation = useTransform(scrollYProgress, [0, 1], ["0", "80deg"])

    return(
        <header ref={ref}>

            <motion.div className="background_ground" style={ isDesktop && { y: animate_ground_main}}/>

            <motion.div className="background_ground_2" style={ isDesktop && { y: animate_ground}} />

            <motion.div className="background_ground_3" style={ isDesktop && { y: animate_ground}} />

            <motion.div className="background_pyramids_front" style={ isDesktop && {y: animate_pyramid_front}}/>

            
            <motion.div className="textContainer utility_container" style={ isDesktop && { y: animate_text}}>
                <Animation_enterAndScale_provider className="container" >
                <h4>The acient world</h4>
                <h1>Discover the awe-inspiring Egyptian world</h1>

                {isDesktop &&
                    <div className="scrollDown">
                            <p>Scrolldown</p>
                            <Icon_arrow/>
                    </div>
                }

                </Animation_enterAndScale_provider>
            </motion.div>

            <motion.div className="background_pyramids_back" style={ isDesktop && { y: animate_pyramid_back}}/>

            <motion.div className="background_sky" style={ isDesktop && { backgroundPosition: animate_sky}} />
            <motion.div className="background_stars"  animate={ isDesktop && { rotate: ["0deg", "360deg"]}} transition={{duration: "60", repeat: "infinite", ease: "linear"}}  />
            <motion.div className="background_stars_2" style={ isDesktop && { rotate: animate_rotation}} />

            <div className="layer"></div>

        </header>
    )


}