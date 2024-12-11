import React from "react"
import { useTranslations } from "next-intl"
import { fascinate } from "@/components/Fonts"
import "./About.css"
import SlideLeft from "@/animations/SlideLeft"
import SlideTop from "@/animations/SlideTop"
import Scroll from "@/animations/ScrollTop"
import { icons } from "@/assets/stack/_images"
import Image from "next/image"

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
                        {icons.map((icon, index) => (
                            <div>
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={50}
                                    height={50}
                                    key={icon.alt + index}
                                />
                                {/* {icon.alt} */}
                            </div>
                        ))}
                    </SlideTop>
                </div>
            </div>
        </section>
    )
}

export default About
