import { getTranslations } from "next-intl/server"
import "./Main.css"
import { fascinate } from "../../components/Fonts"
import { Header } from "../Header/Header"
import { MessagesProps, Messages } from "@/types/i18n"

const Main = async ({ messages }: MessagesProps) => {
    const { main: text } = messages || {}
    const t = await getTranslations("main")

    // Helper do uzyskania tekstu
    const getText = (key: keyof Messages["main"]) => {
        return text ? text[key] : t(key)
    }

    return (
        <>
            <a
                href="#top"
                className="skip-link-keyboard"
            >
                {getText("skipToMain")}
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
                            <p
                                className="subtitle"
                                aria-label={getText("h2")}
                            >
                                {getText("h2")}
                            </p>
                        </section>

                        <section
                            className="keywords-section"
                            aria-label={getText("keywordsSection")}
                        >
                            <div
                                className="text-animated"
                                aria-hidden="true" // jeśli to jest tylko animacja dekoracyjna
                            >
                                <span data-text={getText("seoText")}>
                                    {getText("seoText")}
                                </span>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Main
