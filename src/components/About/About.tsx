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
                <p>Jako entuzjasta technologii i kreatywny front-end developer, posiadam bogate doświadczenie w projektowaniu warstwy użytkowej dla branży e-commerce. W pracy komercyjnej korzystam z <span className="primary">HTML5/CSS3</span> , <span className="primary">JavaScript DOM</span> , <span className="primary">jQuery</span> , <span className="primary">Bootstrap 3</span> , <span className="primary">LESS</span> używając takich narzędzi jak <span className="primary primary-dark">Visual Studio Code</span> , <span className="primary primary-dark">Terminal</span> , <span className="primary primary-dark">Figma</span> oraz <span className="primary primary-dark">Photoshop</span>.</p>
                <p>Równolegle do mojej komercyjnej działalności, prowadzę projekt open source, wykorzystujący dodatkowo <span className="primary">Prisma</span>, <span className="primary">Postgresql</span> , <span className="primary">Tailwind CSS</span> , <span className="primary">Javascript</span> , <span className="primary">Typescript</span> i <span className="primary">Next.js</span>. Jest to przestrzeń, gdzie mogę eksperymentować z nowymi technologiami i dzielić się innowacjami.</p>
                <p>Moje umiejętności w kontroli wersji i zarządzaniu projektami (<span className="primary">SVN</span>, <span className="primary">Github</span>, <span className="primary">Jira</span>) wspierają efektywną współpracę w zespołach. Dążę do tworzenia intuicyjnych, wydajnych i estetycznie przyjemnych interfejsów, które zaspokajają potrzeby biznesowe i zachwycą użytkowników.</p>
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
