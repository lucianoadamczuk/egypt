import { useContext, useRef } from "react"
import { Button_menu } from "../../UI"
import { NavLink } from "react-router-dom"
import { isMobile } from "react-device-detect"

import "./style.css"
import { Context_buttonMenu } from "../../../contexts"

export const Navbar = () => {

    const {isMenuOpen, setIsMenuOpen} = useContext(Context_buttonMenu)

    const audioRef = useRef()


    return(
        <nav >
            <article className=" container utility_container">

                <h4>GoToEgypt</h4>

                <section className={`linksContainer ${isMenuOpen && "openMenu"} `}>
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)} >
                        <p onMouseOver={() => audioRef.current.play()} >Home</p>
                    </NavLink> 
                    <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} >
                        <p onMouseOver={() => audioRef.current.play()} >Explore</p>
                    </NavLink> 
                    <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} >
                        <p onMouseOver={() => audioRef.current.play()} >Articles </p>
                    </NavLink> 
                    <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} >
                        <p onMouseOver={() => audioRef.current.play()} >Galeries </p>
                    </NavLink> 
                    <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} >
                        <p onMouseOver={() => audioRef.current.play()} >Contact</p>
                    </NavLink> 
                </section>
                
                <Button_menu onClick={() => {setIsMenuOpen(!isMenuOpen)}}/>

                <audio src="/assets/audios/audio_button.mp3" ref={audioRef}></audio>
            </article>
        </nav>
    )
}