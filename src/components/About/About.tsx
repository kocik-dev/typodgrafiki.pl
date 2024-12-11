import React from "react"
import { useTranslations } from "next-intl"
import { fascinate } from "@/components/Fonts"
import "./About.css"
import SlideLeft from "@/Animations/SlideLeft"
import SlideTop from "@/Animations/SlideTop"
import Scroll from "@/Animations/ScrollTop"

const About = () => {
    const t = useTranslations("about")
    return (
        <section id="about" className="container">
            <Scroll />
            <div className="info flex">
                <div>
                    <SlideLeft>
                        <h2 className={`title-small ${fascinate.className}`}>
                            {t("title")}
                        </h2>
                    </SlideLeft>
                    <SlideLeft>
                        <h3 className="title-smaller">{t("subtitle")}</h3>
                    </SlideLeft>
                </div>
                <div>
                    <SlideTop>
                        <p className="text">{t("text1")}</p>
                    </SlideTop>
                    <SlideTop>
                        <p className="text">{t("text2")}</p>
                    </SlideTop>
                    <SlideTop>
                        <p className="text">{t("text3")}</p>
                    </SlideTop>
                    <SlideTop>
                        <h4 className="title-smaller">{t("stack")}</h4>
                        IMAGES
                    </SlideTop>
                </div>
            </div>
        </section>
    )
}

export default About
