import "./style.css"

export const Slide_carousel_3D = ({backgroundImage, title, text}) => {
    return(
        <div className="Slide_carousel_3D" load style={{backgroundImage: `url(${backgroundImage})`}}>
            <p> {text} </p>
            <h3> {title} </h3>

            <div className="layer"></div>
        </div>
    )
}