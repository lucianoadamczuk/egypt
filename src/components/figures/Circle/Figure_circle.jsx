import { Animation_bounceShadow_provider } from "../../../animations"
import { Animation_bounce_provider } from "../../../animations/Animaton_bounce"
import "./style.css"

export const Figure_circle = (props) => {
    const {
        image, alt
    } = props

    return(
        <article className="Figure_circle">

            <section className="figure"></section>

            <Animation_bounce_provider className="imageContainer">
                <img src={image} alt={alt} />
            </Animation_bounce_provider>
            
            <Animation_bounceShadow_provider className="shadow"/>
            
        </article>
    )
}