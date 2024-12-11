import { useTranslations } from "next-intl"
import { fascinate } from "@/components/Fonts"
import PortfolioItem from "./PortfolioItem"
import imageGithub from "../../assets/tech/github.svg"
import imageUnesco from "../../assets/tech/unesco.svg"
import imageTrip from "../../assets/tech/trip.svg"
import imageOute from "../../assets/tech/oute.svg"
import imageAudioMix from "../../assets/tech/audio-mix.svg"
import imagePuupil from "../../assets/tech/puupil.svg"
import imageBesthunters from "../../assets/tech/besthunters.svg"
import imagePremiumSound from "../../assets/tech/premium-sound.svg"

import "./Portfolio.css"

export interface ProjectItem {
    name: string
    scope: string
    image: string
    githubLink?: string
}

const projectItems: ProjectItem[] = [
    {
        name: "Oute",
        scope: "Brand, UI/UX, Website, Mobile Application, Fullstack developer",
        image: imageOute,
        // githubLink: "https://github.com/typodgrafiki/portfolio-html",
    },
    {
        name: "Tripist",
        scope: "Brand, UI/UX, Website, Fullstack developer",
        image: imageTrip,
        // githubLink: "https://github.com/typodgrafiki/portfolio-html",
    },
    {
        name: "Find Unesco",
        scope: "Brand, UI/UX, Website, Fullstack developer",
        image: imageUnesco,
        // githubLink: "https://github.com/typodgrafiki/portfolio-html",
    },

    {
        name: "Audio Mix",
        scope: "UI, Online shop Template, Frontend developer",
        image: imageAudioMix,
        // githubLink: "https://github.com/typodgrafiki/portfolio-html",
    },
    {
        name: "Puupil",
        scope: "UI, Online shop Template, Frontend developer",
        image: imagePuupil,
        // githubLink: "https://github.com/typodgrafiki/portfolio-html",
    },
    {
        name: "Besthunters",
        scope: "UI, Online shop Template, Frontend developer",
        image: imageBesthunters,
        // githubLink: "https://github.com/typodgrafiki/portfolio-html",
    },
    {
        name: "Premium Sound",
        scope: "UI, Online shop Template, Frontend developer",
        image: imagePremiumSound,
        // githubLink: "https://github.com/typodgrafiki/portfolio-html",
    },
]

const Projects = () => {
    const t = useTranslations("projects")

    return (
        <section
            id="projects"
            className="container"
        >
            <h2 className={`title-small ${fascinate.className}`}>
                {t("title")}
            </h2>

            <ul>
                {projectItems.map((item, index) => (
                    <PortfolioItem
                        name={item.name}
                        scope={item.scope}
                        image={item.image}
                        githubLink={item.githubLink}
                        key={item.name + index}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Projects
