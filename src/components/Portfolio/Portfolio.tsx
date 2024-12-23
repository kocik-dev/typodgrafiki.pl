import { useTranslations } from "next-intl"
import { fascinate } from "@/components/Fonts"
import PortfolioItem from "./PortfolioItem"
import SlideLeft from "@/animations/SlideLeft"
import SlideTop from "@/animations/SlideTop"
import { ProjectItem } from "@/types/types"
import "./Portfolio.css"
import outeImg from "@/assets/projects/oute.jpg"
import tripistImg from "@/assets/projects/tripist.jpg"

import findUnescoImg from "@/assets/projects/find-unesco.jpg"
import audiomixImg from "@/assets/projects/audio-mix.jpg"
import puupilImg from "@/assets/projects/puupil.jpg"
import cinemaTechImg from "@/assets/projects/cinematech.jpg"
import paulBunyanImg from "@/assets/projects/paulbunyan.jpg"
import premiumSoundImg from "@/assets/projects/premium-sound.jpg"

const projectItems: ProjectItem[] = [
    {
        name: "Oute",
        scope: "Brand, UI/UX, Website, Mobile Application, Fullstack developer",
        image: outeImg,
        width: 476,
        height: 288,
    },
    {
        name: "Tripist",
        scope: "Brand, UI/UX, Website, Fullstack developer",
        image: tripistImg,
        width: 380,
        height: 368,
    },
    {
        name: "Find Unesco",
        scope: "Brand, UI/UX, Website, Fullstack developer",
        image: findUnescoImg,
        width: 479,
        height: 272,
    },
    {
        name: "Audio Mix",
        scope: "UI, Online shop Template, Frontend developer",
        image: audiomixImg,
        width: 479,
        height: 284,
    },
    {
        name: "Puupil",
        scope: "UI, Online shop Template, Frontend developer",
        image: puupilImg,
        width: 479,
        height: 281,
    },
    {
        name: "Cinema Tech",
        scope: "UI, Online shop Template, Frontend developer",
        image: cinemaTechImg,
        width: 479,
        height: 281,
    },
    {
        name: "PaulBunyan",
        scope: "UI, Online shop Template, Frontend developer",
        image: paulBunyanImg,
        width: 479,
        height: 281,
    },
    {
        name: "Premium Sound",
        scope: "UI, Online shop Template, Frontend developer",
        image: premiumSoundImg,
        width: 479,
        height: 281,
    },
]

const Projects = () => {
    const t = useTranslations("projects")

    return (
        <section
            id="projects"
            className="container"
            aria-labelledby="projects-title"
        >
            <div className="head flex-md overflow">
                <SlideLeft>
                    <h2
                        id="projects-title"
                        className={`title-small ${fascinate.className}`}
                    >
                        {t("title")}
                    </h2>
                </SlideLeft>
                <div className="columns flex">
                    <SlideTop>
                        <div
                            role="region"
                            aria-labelledby="discipline-title"
                        >
                            <h3
                                id="discipline-title"
                                className="title-smaller"
                            >
                                Discipline
                            </h3>
                            <ul
                                className="list"
                                role="list"
                            >
                                <li role="listitem">UI design</li>
                                <li role="listitem">Code development</li>
                            </ul>
                        </div>
                    </SlideTop>
                    <SlideTop delay={500}>
                        <div
                            role="region"
                            aria-labelledby="tools-title"
                        >
                            <h3
                                id="tools-title"
                                className="title-smaller"
                            >
                                Tools
                            </h3>
                            <ul
                                className="list"
                                role="list"
                            >
                                <li role="listitem">React</li>
                                <li role="listitem">Next.js</li>
                                <li role="listitem">React Native</li>
                                <li role="listitem">Postgresql</li>
                            </ul>
                        </div>
                    </SlideTop>
                    <SlideTop delay={1000}>
                        <div
                            role="region"
                            aria-labelledby="industry-title"
                        >
                            <h3
                                id="industry-title"
                                className="title-smaller hidden-xs"
                            >
                                Industry
                            </h3>
                            <ul
                                className="list tags flex"
                                role="list"
                            >
                                {["tech", "ecommerce", "sass", "web3"].map(
                                    (tag) => (
                                        <li
                                            key={tag}
                                            role="listitem"
                                        >
                                            <span className="btn btn-white">
                                                {tag}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </SlideTop>
                </div>
            </div>
            <ul
                className="project-list"
                role="list"
                aria-label={t("projectsList")}
            >
                {projectItems.map((item, index) => (
                    <li
                        key={item.name + index}
                        role="listitem"
                    >
                        <PortfolioItem item={item} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projects
