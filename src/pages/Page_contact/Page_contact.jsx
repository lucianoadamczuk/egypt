
import { useRef } from "react"
import { Animation_enterAndScale_provider, Animation_pageTransition_provider } from "../../animations"
import { Icon_email, Icon_github, Icon_linkedin } from "../../icons"
import "./style.css"

export const Page_contact = () => {


    return(
        <Animation_pageTransition_provider className="Page_contact">
            <Animation_enterAndScale_provider className="content">
                <section className="textContainer">
                    <h1>Thanks for visit my project</h1>
                    <p>Contact me to work together</p>
                </section>

                <section className="socialMediasContainer">
                    <div className="socialMedias">
                        <a href="https://github.com/lucianoadamczuk">
                            <Icon_github/>
                        </a>

                        <a href="https://www.linkedin.com/in/luciano-adamczuk-5255431a8/">
                            <Icon_linkedin/>
                        </a>
                    </div>

                    <p>lucianoadamczuk@gmail.com</p>
                </section>

                
            </Animation_enterAndScale_provider>
        </Animation_pageTransition_provider>
    )
}