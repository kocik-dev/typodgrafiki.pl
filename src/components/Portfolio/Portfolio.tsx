import Image from "next/image"
import PortfolioItem from "./PortfolioItem/PortfolioItem"
import { linkScroll } from "../Header/Header"
import imageHtml from "../../assets/tech/html.svg"
import imageJs from "../../assets/tech/js.svg"
import imageReact from "../../assets/tech/react.svg"
import imageGithub from "../../assets/tech/github.svg"
import imageUnesco from "../../assets/tech/unesco.svg"
import imageTrip from "../../assets/tech/trip.svg"

import "./Portfolio.css"

export interface ProjectItem {
    link?: string
    classList: string
    name: string
    subName: string
    description?: string
    icon: string
    githubLink?: string
    slogan?: string
}

const projectsItem1: ProjectItem[] = [
    {
        link: "http://html.typodgrafiki.pl/",
        classList: "box box-html",
        name: "HTML / CSS",
        subName: "Semantyka i stylowanie",
        slogan: "Showcase",
        description:
            "Ten projekt demonstruje moje umiejętności w zakresie HTML i CSS, pokazując, jak można wykorzystać te technologie do tworzenia estetycznie przyjemnych i funkcjonalnych interfejsów użytkownika. Został stworzony wyłącznie do celów portfolio i przedstawia szeroki zakres technik projektowania responsywnego oraz zaawansowanych efektów wizualnych.",
        icon: imageHtml,
        githubLink: "https://github.com/typodgrafiki/portfolio-html",
    },
    {
        classList: "box box-trip",
        name: "Tripist",
        subName: "Aplikacja Travel Plannel",
        slogan: "Fullstack, Next.js",
        description:
            "Tripist to kompleksowa aplikacja do planowania podróży, łącząca front-end i back-end w Next.js. Umożliwia użytkownikom logowanie, tworzenie i zarządzanie listami rzeczy do zabrania na różne okazje, takie jak wyjazdy, wycieczki czy treningi. Ta aplikacja demonstruje moje umiejętności w tworzeniu pełnoprawnych, zintegrowanych rozwiązań webowych, które są zarówno funkcjonalne, jak i intuicyjne w obsłudze.",
        icon: imageTrip,
        githubLink: "https://github.com/typodgrafiki/tripist",
    },
]

const projectsItem2: ProjectItem[] = [
    {
        link: "http://react.typodgrafiki.pl/",
        classList: "box box-react",
        name: "React",
        subName: "Projekt",
        icon: imageReact,
        githubLink: "https://github.com/typodgrafiki/portfolio-react",
    },
    {
        link: "http://js.typodgrafiki.pl/",
        classList: "box box-js",
        name: "JS",
        subName: "Dynamiczne elementy",
        icon: imageJs,
        githubLink: "https://github.com/typodgrafiki/portfolio-js",
    },
    {
        link: "http://findunesco.com/",
        classList: "box box-unesco",
        name: "Find UNESCO",
        subName: "Projekt wyszukujący miejsca UNESCO w Europie",
        slogan: "Frontend, Next.js",
        description:
            "Ten projekt, zrealizowany w Next.js, prezentuje interaktywną mapę miejsc światowego dziedzictwa UNESCO. Użytkownicy mogą przeszukiwać i odkrywać różnorodne lokalizacje w Europie. Projekt łączy zaawansowane funkcje przeglądania z interaktywnym interfejsem użytkownika, demonstrując moje umiejętności w zakresie tworzenia responsywnych i użytkowych aplikacji webowych.",
        icon: imageUnesco,
        githubLink: "https://github.com/typodgrafiki/find-unesco",
    },
    {
        link: "https://github.com/typodgrafiki",
        classList: "box box-github",
        name: "Github",
        subName: "Moje konto",
        icon: imageGithub,
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
                <div className="wide-width">
                    <div className="grid grid-left">
                        {projectsItem1.map((item) => (
                            <PortfolioItem
                                link={item.link}
                                classList={item.classList}
                                name={item.name}
                                subName={item.subName}
                                icon={item.icon}
                                description={item.description}
                                slogan={item.slogan}
                                githubLink={item.githubLink}
                                key={item.name}
                            />
                        ))}
                    </div>
                    <div className="grid grid-right">
                        {projectsItem2.map((item) => (
                            <PortfolioItem
                                link={item.link}
                                classList={item.classList}
                                name={item.name}
                                subName={item.subName}
                                icon={item.icon}
                                description={item.description}
                                slogan={item.slogan}
                                githubLink={item.githubLink}
                                key={item.name}
                            />
                        ))}
                    </div>
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
