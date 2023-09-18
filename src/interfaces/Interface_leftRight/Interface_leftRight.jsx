import { AnimationFadeInAndTranslate_provider, Animation_enterFromTheLeft_provider, Animation_enterFromTheRight_provider } from "../../animations"
import "./style.css"

export const Interface_leftRight = (props) => {

    const {
        preTitle,
        title,
        accentedTitle,

        sectionTitle,
        paragraph,

        content,
        children
    } = props

    return(
        <article className="interface_leftRight utility_internalPadding">

            <AnimationFadeInAndTranslate_provider className="header utility_container">
                <h6 className="preTitle"> {preTitle} </h6>

                <h3 className="title"> 
                    {title} 
                    <span className="accentedTitle"> 
                        {accentedTitle} 
                    </span> 
                </h3>

            </AnimationFadeInAndTranslate_provider>

            
            <section className=" content utility_container">
                
                <Animation_enterFromTheLeft_provider className="textContainer">

                    <h4> {sectionTitle} </h4>
                    <p> {paragraph} </p>
                    <a href="">Read more</a>

                </Animation_enterFromTheLeft_provider>

                <Animation_enterFromTheRight_provider>
                    {content}
                </Animation_enterFromTheRight_provider>

            </section>
            

            <section className="children utility_container">
                {children}
            </section>

        </article>
    )
}