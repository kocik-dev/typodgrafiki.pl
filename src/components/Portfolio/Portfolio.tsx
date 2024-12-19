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
        >
            <div className="head flex-md">
                <SlideLeft>
                    <h2 className={`title-small ${fascinate.className}`}>
                        {t("title")}
                    </h2>
                </SlideLeft>
                <div className="columns flex">
                    <SlideTop>
                        <h3 className="title-smaller">Discipline</h3>
                        <ul className="list">
                            <li>UI design</li>
                            <li>Code development</li>
                        </ul>
                    </SlideTop>
                    <SlideTop delay={500}>
                        <h3 className="title-smaller">Tools</h3>
                        <ul className="list">
                            <li>React</li>
                            <li>Next.js</li>
                            <li>React Native</li>
                            <li>Postgresql</li>
                        </ul>
                    </SlideTop>
                    <SlideTop delay={1000}>
                        <h3 className="title-smaller hidden-xs">Industry</h3>
                        <ul className="list tags flex">
                            <li className="btn btn-white">tech</li>
                            <li className="btn btn-white">ecommenrce</li>
                            <li className="btn btn-white">sass</li>
                            <li className="btn btn-white">web3</li>
                        </ul>
                    </SlideTop>
                </div>
            </div>
            <ul className="project-list">
                {projectItems.map((item, index) => (
                    <PortfolioItem
                        item={item}
                        key={item.name + index}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Projects
