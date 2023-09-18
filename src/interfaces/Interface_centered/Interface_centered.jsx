import { AnimationFadeInAndTranslate_provider } from "../../animations"
import "./style.css"

export const Interface_centered = (props) => {

    const {
        className,
        preTitle,
        title,
        subtitle,
        accentedTitle,
        paragraph_1,
        paragraph_2,
        children
    } = props

    return(
        <article className={`interface_centered utility_internalPadding ${className} ` } >

                <AnimationFadeInAndTranslate_provider className="header utility_container">

                        <h6 className="preTitle"> {preTitle} </h6>

                        <h3 className="title"> 
                            {title} <span className="accentedTitle"> {accentedTitle} </span> 
                        </h3>

                        <p> {subtitle} </p>

                </AnimationFadeInAndTranslate_provider>


                <AnimationFadeInAndTranslate_provider className="paragraphs_content utility_container">                
                    <div className="text_container">
                        <p> {paragraph_1} </p>
                        <p> {paragraph_2} </p>
                    </div>
                </AnimationFadeInAndTranslate_provider>

                
                <AnimationFadeInAndTranslate_provider className="children utility_container">
                    <div className="content">
                        {children}
                    </div>
                </AnimationFadeInAndTranslate_provider>

        </article>
    )
}