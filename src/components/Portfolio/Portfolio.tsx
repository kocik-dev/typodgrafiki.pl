import React from "react"
import PortfolioItem from "./PortfolioItem/PortfolioItem"
import { linkScroll } from "../Header/Header"
import iconHtml from "../../assets/tech/html.svg"
import iconJs from "../../assets/tech/js.svg"
import iconReact from "../../assets/tech/react.svg"
import iconGithub from "../../assets/tech/github.svg"

import "./Portfolio.css"

interface ProjectItem {
    link: string
    classList: string
    name: string
    subName: string
    icon: string
}

const projectsItem: ProjectItem[] = [
    {
        link: "http://html.typodgrafiki.pl/",
        classList: "box box-html",
        name: "HTML / CSS",
        subName: "Semantyka i stylowanie",
        icon: iconHtml,
    },
    {
        link: "http://js.typodgrafiki.pl/",
        classList: "box box-js",
        name: "JavaScript",
        subName: "Dynamiczne elementy",
        icon: iconJs,
    },
    {
        link: "http://react.typodgrafiki.pl/",
        classList: "box box-react",
        name: "React",
        subName: "Projekt",
        icon: iconReact,
    },
    {
        link: "https://github.com/typodgrafiki",
        classList: "box box-github",
        name: "Github",
        subName: "Moje konto",
        icon: iconGithub,
    },
]

const Portfolio: React.FC = () => {
    return (
        <section
            id="portfolio"
            className="flex horizontal-center margin-section"
        >
            <div className="flex flex-column">
                <div className="caption small-width">
                    <h2 className="title-small">Przykładowe projekty</h2>
                </div>
                <div className="grid wide-width">
                    {projectsItem.map((item) => (
                        <PortfolioItem
                            link={item.link}
                            classList={item.classList}
                            name={item.name}
                            subName={item.subName}
                            icon={item.icon}
                            key={item.name}
                        />
                    ))}
                </div>
                <a
                    href="#contact"
                    className="link-border"
                    onClick={linkScroll}
                >
                    Napisz do mnie
                </a>
            </div>
        </section>
    )
}

export default Portfolio
