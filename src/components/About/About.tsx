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
                    <strong>Front-end developer</strong> o zapleczu graficznym z
                    doświadczeniem w tworzeniu warstwy graficznej ecommerce.
                    Szukam możliwości rozwoju przy projektach wykorzystujących
                    nowe technologie (React)
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
                        <h3>Ciągle się uczę:</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
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
