/**
 * Projects - Sekcja portfolio z listą projektów i animacjami
 *
 * Komponent renderuje sekcję portfolio zawierającą informacje o umiejętnościach,
 * narzędziach, branżach oraz listę projektów. Zawiera animowane wejścia elementów
 * i pełne wsparcie dla dostępności.
 *
 * @structure
 * - Nagłówek sekcji (h2)
 * - Kolumny informacyjne:
 *   - Dyscypliny (UI design, Code development)
 *   - Narzędzia (React, Next.js, React Native, Postgresql)
 *   - Branże (tagi: tech, ecommerce, sass, web3)
 * - Lista projektów z danymi i obrazami
 *
 * @data
 * projectItems: ProjectItem[] - Tablica obiektów z danymi projektów:
 * - name: string - Nazwa projektu
 * - scope: string - Zakres prac
 * - image: StaticImageData - Obraz projektu
 * - width: number - Szerokość obrazu
 * - height: number - Wysokość obrazu
 *
 * @animations
 * - SlideLeft - Animacja wejścia od lewej (nagłówek)
 * - SlideTop - Animacja wejścia z góry (kolumny)
 * - Sekwencyjne opóźnienia dla kolumn (0ms, 500ms, 1000ms)
 *
 * @accessibility
 * - Właściwa struktura nagłówków (h2, h3)
 * - ARIA landmarks i labels
 * - Role dla list i elementów
 * - Semantyczna struktura HTML
 *
 * @i18n
 * Wykorzystuje przestrzeń nazw "projects" dla tłumaczeń:
 * - title: Tytuł sekcji
 * - discipline: Nagłówek dyscyplin
 * - tools: Nagłówek narzędzi
 * - industry: Nagłówek branż
 * - projectsList: Label dla listy projektów
 *
 * @styling
 * - Portfolio.css dla stylów
 * - Fascinate font dla nagłówka
 * - Responsywny układ z flexbox
 * - RWD klasy (hidden-xs, flex-md)
 *
 * @components
 * - PortfolioItem - Komponent pojedynczego projektu
 * - SlideLeft, SlideTop - Komponenty animacji
 *
 * @example
 * <Projects />
 */

import { getTranslationsSection } from "@/i18n/translations"
import { fascinate } from "@/components/Fonts"
import PortfolioItem from "./PortfolioItem"
import SlideLeft from "@/animations/SlideLeft"
import SlideTop from "@/animations/SlideTop"
import { ProjectItem } from "@/types/website"
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
    // {
    //     name: "Audio Mix",
    //     scope: "UI, Online shop Template, Frontend developer",
    //     image: audiomixImg,
    //     width: 479,
    //     height: 284,
    // },
    // {
    //     name: "Puupil",
    //     scope: "UI, Online shop Template, Frontend developer",
    //     image: puupilImg,
    //     width: 479,
    //     height: 281,
    // },
    // {
    //     name: "Cinema Tech",
    //     scope: "UI, Online shop Template, Frontend developer",
    //     image: cinemaTechImg,
    //     width: 479,
    //     height: 281,
    // },
    // {
    //     name: "PaulBunyan",
    //     scope: "UI, Online shop Template, Frontend developer",
    //     image: paulBunyanImg,
    //     width: 479,
    //     height: 281,
    // },
    // {
    //     name: "Premium Sound",
    //     scope: "UI, Online shop Template, Frontend developer",
    //     image: premiumSoundImg,
    //     width: 479,
    //     height: 281,
    // },
]

const Projects = async () => {
    const t = await getTranslationsSection("projects")

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
                        {t.title}
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
                                {t.discipline}
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
                                {t.tools}
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
                                {t.industry}
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
                aria-label={t.projectsList}
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
