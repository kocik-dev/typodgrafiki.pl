import { useTranslations } from "next-intl"
import { fascinate } from "@/components/Fonts"
import PortfolioItem from "./PortfolioItem"
import imageGithub from "@/assets/projects/github.svg"
import imageUnesco from "@/assets/projects/unesco.svg"
import imageTrip from "@/assets/projects/trip.svg"
import imageOute from "@/assets/projects/oute.svg"
import imageAudioMix from "@/assets/projects/audio-mix.svg"
import imagePuupil from "@/assets/projects/puupil.svg"
import imageBesthunters from "@/assets/projects/besthunters.svg"
import imagePremiumSound from "@/assets/projects/premium-sound.svg"

import "./Portfolio.css"
import SlideLeft from "@/animations/SlideLeft"

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
        <section id="projects" className="container">
            <SlideLeft>
                <h2 className={`title-small ${fascinate.className}`}>
                    {t("title")}
                </h2>
            </SlideLeft>
            <ul className="project-list">
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
