import React from "react"
import { useTranslations } from "next-intl"
import { fascinate } from "@/components/Fonts"
import "./About.css"

const About = () => {
    const t = useTranslations("about")
    return (
        <section
            id="about"
            className="container"
        >
            <div className="scroll">
                <a href="#about">scroll</a>
            </div>
            <div className="flex">
                <div>
                    <h2 className={`title-small ${fascinate.className}`}>
                        {t("title")}
                    </h2>
                    <h3 className="title-smaller">{t("subtitle")}</h3>
                </div>
                <div>
                    <p className="text">{t("text1")}</p>
                    <p className="text">{t("text2")}</p>
                    <p className="text">{t("text3")}</p>
                    <p className="text">{t("stack")}</p>
                    IMAGES
                </div>
            </div>
        </section>
    )
}

export default About
