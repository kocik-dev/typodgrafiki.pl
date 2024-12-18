import { useTranslations } from "next-intl"
import { fascinate } from "@/components/Fonts"
import PortfolioItem from "./PortfolioItem"
import { outeImages } from "@/assets/projects/oute/images"
import { tripistImages } from "@/assets/projects/tripist/images"
import { StaticImageData } from "next/image"

import "./Portfolio.css"
import SlideLeft from "@/animations/SlideLeft"
import SlideTop from "@/animations/SlideTop"
import { audiomixImages } from "@/assets/projects/audio-mix/images"
import { findUnescoImages } from "@/assets/projects/find-unesco/images"
import { puupilImages } from "@/assets/projects/puupil/images"
import { cinemaTechImages } from "@/assets/projects/cinema-tech/images"
import { paulBunyanImages } from "@/assets/projects/paulbunyan/images"
import { premiumSoundImages } from "@/assets/projects/premium-sound/images"

export interface ProjectItem {
    name: string
    scope: string
    images: StaticImageData[]
}

const projectItems: ProjectItem[] = [
    {
        name: "Oute",
        scope: "Brand, UI/UX, Website, Mobile Application, Fullstack developer",
        images: outeImages,
    },
    {
        name: "Tripist",
        scope: "Brand, UI/UX, Website, Fullstack developer",
        images: tripistImages,
    },
    {
        name: "Find Unesco",
        scope: "Brand, UI/UX, Website, Fullstack developer",
        images: findUnescoImages,
    },
    {
        name: "Audio Mix",
        scope: "UI, Online shop Template, Frontend developer",
        images: audiomixImages,
    },
    {
        name: "Puupil",
        scope: "UI, Online shop Template, Frontend developer",
        images: puupilImages,
    },
    {
        name: "Cinema Tech",
        scope: "UI, Online shop Template, Frontend developer",
        images: cinemaTechImages,
    },
    {
        name: "PaulBunyan",
        scope: "UI, Online shop Template, Frontend developer",
        images: paulBunyanImages,
    },
    {
        name: "Premium Sound",
        scope: "UI, Online shop Template, Frontend developer",
        images: premiumSoundImages,
    },
]

const Projects = () => {
    const t = useTranslations("projects")

    return (
        <section id="projects" className="container">
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
                        name={item.name}
                        scope={item.scope}
                        images={item.images}
                        key={item.name + index}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Projects
