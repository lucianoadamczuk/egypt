
import { Animation_pageTransition_provider } from "../../animations"
import { Button_big } from "../../components/UI"
import { Figure_square } from "../../components/figures"
import { Figure_circle } from "../../components/figures/Circle/Figure_circle"
import { Footer, Header } from "../../components/layout"
import { Carousel_3D } from "../../components/others"
import { Container_buttons } from "../../containers"
import { Icon_arrow } from "../../icons"
import { Interface_centered, Interface_leftRight } from "../../interfaces"

import "./style.css"

export const Page_home = () => {

    const carouselData = [
        {
            backgroundImage: "/assets/page_home/carousel_3D/slide_1.jpg",
            title: "Abu Simbe",
            text: "Asuan"
        },
        {
            backgroundImage: "/assets/page_home/carousel_3D/slide_2.jpg",
            title: "Naval Port",
            text: "Alejandria"
        },
        {
            backgroundImage: "/assets/page_home/carousel_3D/slide_3.jpg",
            title: "Giza Pyramids",
            text: "Cairo"
        },
        {
            backgroundImage: "/assets/page_home/carousel_3D/slide_4.jpg",
            title: "Excursions",
            text: "All around Egypt"
        },
        {
            backgroundImage: "/assets/page_home/carousel_3D/slide_5.jpg",
            title: "Valley of the king",
            text: "Luxor"
        },
        {
            backgroundImage: "/assets/page_home/carousel_3D/slide_6.jpg",
            title: "Sharm el Sheikh",
            text: "Sinaí"
        },
        {
            backgroundImage: "/assets/page_home/carousel_3D/slide_7.jpg",
            title: "Karnak",
            text: "Luxor"
        }
    ]

    return(
        <Animation_pageTransition_provider className="page_home">
            <Header/>

            <div className="section_1">
                <Interface_centered

                    preTitle="The Acient"
                    title="Egyptian"
                    accentedTitle="civilization"

                    paragraph_1="The ancient Egyptian civilization, famous for its pyramids, pharaohs, mummies, and tombs, flourished for thousands of years. But what was its lasting impact? "
                    paragraph_2="Watch the video below to learn how ancient Egypt contributed to modern-day society with its many cultural developments, particularly in language and mathematics"
                >

                    <video src="/assets/page_home/video-archeology.mp4" 
                        controls 
                        style={
                            {
                                width: "100%", 
                                height: "400px",
                                objectFit: "cover"
                            }
                        }
                    >
                    </video>
                
                </Interface_centered>
            </div>

            <div className="section_2">
                <Interface_leftRight
                    preTitle="10 thins"
                    title="You probably did't know "
                    accentedTitle="about Egypt"

                    sectionTitle="His original name was not Tutankhamun"
                    paragraph="The birth name of the famous Egyptian pharaoh was Tutankhatón. Later, during his reign, he changed his name to Tutankamón, which means Living Image of Amun, in honor of the god Amun. This change reflected a religious shift in ancient Egypt, as the worship of Amun was gaining prominence."
                    
                    content={
                        <Figure_square
                            image="/assets/page_home/tutankhamun.png"
                            alt="tutankhamun"
                        />
                    }
                >

                </Interface_leftRight>

                <Interface_leftRight
                    sectionTitle="Cats were represented in religious practices"
                    paragraph="Cats held a significant and revered role in ancient Egyptian religion. They were associated with the goddess Bastet, who was the goddess of home, fertility, and childbirth, as well as a guardian of the pharaoh. Bastet was often depicted with the head of a lioness or as a lioness, emphasizing her connection to feline creatures. "
                    content={
                        <Figure_circle
                        image="/assets/page_home/cat.png"
                        alt="egyptian cat"
                    />
                    }
                >

                    <Container_buttons>
                        <Button_big 
                            text="Show more"
                            svg={ <Icon_arrow/> }
                        />
                    </Container_buttons>

                </Interface_leftRight>
            </div>

            <div className="section_3">
                <Interface_centered
                    preTitle="Go back in time"
                    title="With our top"
                    accentedTitle="experiences"
                    subtitle="Magnificent monuments, a lush delta, and its long history, combined with welcoming, story-loving people"
                >
                    
                    <Carousel_3D dataToShow={carouselData}/>

                </Interface_centered>
            </div>
            
            <Footer/>
        </Animation_pageTransition_provider>
    )
}