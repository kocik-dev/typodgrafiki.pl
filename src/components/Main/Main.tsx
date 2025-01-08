/**
 * Main - Sekcja hero strony głównej
 *
 * Komponent renderuje sekcję powitalną (hero) strony głównej, zawierającą
 * nagłówek, tytuł, podtytuł oraz animowaną sekcję słów kluczowych.
 * Zoptymalizowany pod kątem dostępności i SEO.
 *
 * @structure
 * - Skip link dla nawigacji klawiaturowej
 * - Header
 * - Główna sekcja hero
 *   - Tytuł ("Front-end Developer")
 *   - Podtytuł (tłumaczony)
 * - Sekcja słów kluczowych z animacją
 *
 * @accessibility
 * - Skip link dla użytkowników klawiatury
 * - Właściwa struktura nagłówków
 * - ARIA labels dla sekcji
 * - Ukryte elementy dekoracyjne (aria-hidden)
 * - Semantyczna struktura HTML
 *
 * @i18n
 * Wykorzystuje przestrzeń nazw "main" dla tłumaczeń:
 * - skipToMain: Tekst dla skip linka
 * - h2: Podtytuł
 * - keywordsSection: Label dla sekcji słów kluczowych
 * - seoText: Tekst animowany
 *
 * @styling
 * - Main.css dla stylów
 * - Font fascinate dla tytułu
 * - Flexbox dla layoutu
 * - Klasy utility dla RWD
 *
 * @components
 * - Header - Komponent nagłówka
 *
 * @seo
 * - Semantyczna struktura HTML
 * - Odpowiednie znaczniki nagłówkowe
 * - Teksty zoptymalizowane pod SEO
 *
 * @example
 * <Main />
 */

import { getTranslations } from "next-intl/server"
import "./Main.css"
import { fascinate } from "../../components/Fonts"
import { Header } from "../Header/Header"

const Main = async () => {
    const t = await getTranslations("main")

    return (
        <>
            <a
                href="#top"
                className="skip-link-keyboard"
            >
                {t("skipToMain")}
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
                                aria-label={t("h2")}
                            >
                                {t("h2")}
                            </p>
                        </section>

                        <section
                            className="keywords-section"
                            aria-label={t("keywordsSection")} // np. "Skills and technologies"
                        >
                            <div
                                className="text-animated"
                                aria-hidden="true" // jeśli to jest tylko animacja dekoracyjna
                            >
                                <span data-text={t("seoText")}>
                                    {t("seoText")}
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
