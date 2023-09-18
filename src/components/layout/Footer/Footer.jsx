import { Container_buttons } from "../../../containers"
import { Icon_arrow } from "../../../icons"
import { Interface_centered } from "../../../interfaces"
import { Button_big } from "../../UI"

import "./style.css"

export const Footer = () => {
    return(
        <footer>
            <Interface_centered className="content"
                preTitle="Thank you"
                title="To our sponsors and event"
                accentedTitle="partners"
            >
                
                <div className="footer_sponsorsContainer ">
                    <img src="src/assets/page_home/sponsors/sponsor_1.png" alt="NatGeo logo"                 />
                    <img src="src/assets/page_home/sponsors/sponsor_2.png" alt="Pyramid International Logo"  />
                    <img src="src/assets/page_home/sponsors/sponsor_3.png" alt="BBC logo"                    />
                    <img src="src/assets/page_home/sponsors/sponsor_4.png" alt="Lonely Plant Logo"           />
                </div>

                <Container_buttons>
                    <Button_big
                        text="Book now" 
                        svg={ <Icon_arrow/> }
                    />
                </Container_buttons>

            </Interface_centered>

                <div className="bottom">
                    <p>All right reserved 2023</p>

                    <h4>GoToEgypte</h4>

                    <div className="links">
                        <a href="">Privacy</a>
                        <a href="">Disclaimer</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            
                <img src="/src/assets/footer/background.png" alt="desert" />
        </footer>
    )
}