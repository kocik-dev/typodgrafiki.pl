import React from "react"
import { getTranslations } from "next-intl/server"
import { fascinate } from "@/components/layout/Fonts"
import "./About.css"
import SlideLeft from "@/animations/SlideLeft"
import SlideTop from "@/animations/SlideTop"
import Scroll from "@/animations/ScrollTop"
import { technologies, tools } from "@/assets/stack/_images"
import Image from "next/image"
import { TypeIcon } from "@/types/website"

const About = async () => {
    // const t = useTranslations("about")
    const t = await getTranslations("about")

    return (
        <section id="about" className="container" aria-labelledby="about-title">
            <Scroll aria-label={t("scrollToTop")} />

            <div className="info flex">
                <div className="overflow">
                    <SlideLeft>
                        <h2
                            id="about-title"
                            className={`title-small ${fascinate.className}`}
                        >
                            {t("title")}
                        </h2>
                    </SlideLeft>
                    <SlideLeft>
                        <h3 className="title-smaller" id="role-title">
                            {t("subtitle")}
                        </h3>
                    </SlideLeft>
                </div>

                <div
                    className="right"
                    role="region"
                    aria-labelledby="about-title"
                >
                    {/* Paragraphs */}
                    <SlideTop>
                        <p className="text">{t("text1")}</p>
                    </SlideTop>
                    <SlideTop>
                        <p className="text">{t("text2")}</p>
                    </SlideTop>
                    <SlideTop>
                        <p className="text">{t("text3")}</p>
                    </SlideTop>

                    {/* Technologies section */}
                    <SlideTop>
                        <section
                            className="tech-row"
                            aria-labelledby="technologies-title"
                        >
                            <h4
                                id="technologies-title"
                                className="title-smaller"
                            >
                                {t("technologies")}
                            </h4>
                            <div className="icons flex" role="list">
                                {technologies.map((icon, index) => (
                                    <Icon
                                        icon={icon}
                                        index={index}
                                        key={icon.alt + index}
                                    />
                                ))}
                            </div>
                        </section>
                    </SlideTop>

                    {/* Tools section */}
                    <SlideTop>
                        <section
                            className="tech-row"
                            aria-labelledby="tools-title"
                        >
                            <h4 id="tools-title" className="title-smaller">
                                {t("tools")}
                            </h4>
                            <div className="icons flex" role="list">
                                {tools.map((icon, index) => (
                                    <Icon
                                        icon={icon}
                                        index={index}
                                        key={icon.alt + index}
                                    />
                                ))}
                            </div>
                        </section>
                    </SlideTop>
                </div>
            </div>
        </section>
    )
}

const Icon = ({ icon, index }: { icon: TypeIcon; index: number }) => {
    return (
        <div className="icon relative" role="listitem">
            <Image
                src={icon.src}
                alt={icon.alt}
                width={26}
                height={26}
                key={icon.alt + index}
            />
            <span
                className="tooltip"
                role="tooltip"
                id={`tooltip-${icon.alt}-${index}`}
            >
                {icon.alt}
            </span>
        </div>
    )
}

export default About
