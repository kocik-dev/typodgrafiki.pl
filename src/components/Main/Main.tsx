import "./Main.css"
import { fascinate } from "../../components/Fonts"
import { Header } from "../Header/Header"
import { getSectionTranslations } from "@/i18n/translations"

const Main = async () => {
    const t = await getSectionTranslations("main")

    return (
        <>
            <a href="#top" className="skip-link-keyboard">
                {t.skipToMain}
            </a>
            <div id="top"></div>
            <div id="main">
                <div className="container">
                    <Header />
                    <main>
                        <section
                            className="flex main-section"
                            aria-labelledby="hero-title"
                        >
                            <h1
                                id="hero-title"
                                className={`title ${fascinate.className}`}
                            >
                                Front-end Developer
                            </h1>
                            <p className="subtitle" aria-label={t.h2}>
                                {t.h2}
                            </p>
                        </section>

                        <section
                            className="keywords-section"
                            aria-label={t.keywordsSection}
                        >
                            <div
                                className="text-animated"
                                aria-hidden="true" // jeśli to jest tylko animacja dekoracyjna
                            >
                                <span data-text={t.seoText}>{t.seoText}</span>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Main
