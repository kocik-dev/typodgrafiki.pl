/**
 * About - Sekcja "O mnie" z animowanymi elementami i ikonami technologii
 *
 * Komponent renderuje sekcję "O mnie" zawierającą informacje o programiście,
 * używanych technologiach i narzędziach. Zawiera animowane elementy i jest
 * w pełni dostępny (ARIA).
 *
 * @features
 * - Animowane wejścia elementów (SlideLeft, SlideTop)
 * - Przycisk przewijania do góry (Scroll)
 * - Responsywny układ
 * - Internacjonalizacja (next-intl)
 * - Ikony technologii i narzędzi z tooltipami
 *
 * @structure
 * - Nagłówek z animacją (tytuł i podtytuł)
 * - Sekcja tekstowa (3 paragrafy)
 * - Sekcja technologii (lista ikon)
 * - Sekcja narzędzi (lista ikon)
 *
 * @accessibility
 * - Poprawna struktura nagłówków (h2-h4)
 * - ARIA landmarks i labels
 * - Role dla list i elementów listy
 * - Dostępne tooltips
 * - Alt teksty dla ikon
 *
 * @components
 * - Icon - Wewnętrzny komponent dla ikon z tooltipami
 *
 * @dependencies
 * - next-intl - internacjonalizacja
 * - animations/* - komponenty animacji
 * - assets/stack - ikony technologii i narzędzi
 *
 * @styles
 * - About.css - dedykowane style
 * - fascinate - font
 *
 * @example
 * <About />
 */

/**
 * Icon - Komponent ikony z tooltipem
 *
 * @param {TypeIcon} icon - Obiekt ikony (src i alt)
 * @param {number} index - Indeks dla unikalnych kluczy
 *
 * @accessibility
 * - role="listitem" dla struktury listy
 * - role="tooltip" dla podpowiedzi
 * - Unikalne ID dla tooltipów
 */

import React from "react"
import { getTranslationsSection } from "@/i18n/translations"
import { fascinate } from "@/components/Fonts"
import "./About.css"
import SlideLeft from "@/animations/SlideLeft"
import SlideTop from "@/animations/SlideTop"
import Scroll from "@/animations/ScrollTop"
import { technologies, tools } from "@/assets/stack/_images"
import Image from "next/image"
import { TypeIcon } from "@/types/website"

const About = async () => {
    const t = await getTranslationsSection("about")

    return (
        <section
            id="about"
            className="container"
            aria-labelledby="about-title"
        >
            <Scroll aria-label={t.scrollToTop} />

            <div className="info flex">
                <div className="overflow">
                    <SlideLeft>
                        <h2
                            id="about-title"
                            className={`title-small ${fascinate.className}`}
                        >
                            {t.title}
                        </h2>
                    </SlideLeft>
                    <SlideLeft>
                        <h3
                            className="title-smaller"
                            id="role-title"
                        >
                            {t.subtitle}
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
                        <p className="text">{t.text1}</p>
                    </SlideTop>
                    <SlideTop>
                        <p className="text">{t.text2}</p>
                    </SlideTop>
                    <SlideTop>
                        <p className="text">{t.text3}</p>
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
                                {t.technologies}
                            </h4>
                            <div
                                className="icons flex"
                                role="list"
                            >
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
                            <h4
                                id="tools-title"
                                className="title-smaller"
                            >
                                {t.tools}
                            </h4>
                            <div
                                className="icons flex"
                                role="list"
                            >
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
        <div
            className="icon relative"
            role="listitem"
        >
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
