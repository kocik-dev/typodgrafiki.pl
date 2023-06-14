import React from "react"
import { linkScroll } from "../Header/Header"
import "./About.css"

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="flex horizontal-center margin-section"
        >
            <div className="caption small-width caption-border">
                <h2 className="title-small">O mnie</h2>
                <p>
                    <strong>Front-end developer</strong> o zapleczu graficznym,
                    a moje główne obszary ekspertyzy to tworzenie warstwy
                    graficznej w kontekście e-commerce. Z pasją podchodzę do
                    projektów, które wykorzystują nowoczesne technologie,
                    szczególnie w obszarze React.
                </p>
                <div className="grid vertical-top">
                    <div>
                        <h3>Czuję się dobrze w:</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>SCSS/LESS</li>
                            <li>JavaScript DOM</li>
                            <li>jQuery</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Skupiam się na pogłębianiu wiedzy w:</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Typescript</li>
                            <li>Next</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Jestem otwarty na nowe wyzwania i projekty, które pozwolą mi
                    rozwijać się jako front-end developer. Moją pasją jest
                    tworzenie estetycznych, responsywnych i przyjaznych dla
                    użytkownika stron internetowych, które dostarczają wartość
                    dla klientów.
                </p>
                <a
                    className="btn btn-yellow"
                    href="#portfolio"
                    onClick={linkScroll}
                >
                    Zobacz projekty
                </a>
            </div>
        </section>
    )
}

export default About
