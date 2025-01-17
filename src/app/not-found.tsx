/**
 * Custom404 - Strona błędu 404 (Not Found)
 *
 * Komponent strony błędu 404 z pełnym wsparciem dla dostępności (ARIA)
 * i internacjonalizacji (next-intl). Wyświetla komunikat o błędzie
 * i przycisk powrotu do strony głównej.
 *
 * @metadata
 * - Ustawia własne meta tagi dla SEO
 * - Używa niestandardowego fontu (fascinate)
 *
 * @accessibility
 * - Poprawna struktura nagłówków
 * - ARIA labels i roles
 * - Status message dla czytników ekranu
 * - Dostępna nawigacja przyciskiem
 *
 * @i18n
 * - Wszystkie teksty są tłumaczone (namespace: "notFound")
 * - Obsługa wielu języków
 *
 * @components
 * - Arrow - Wewnętrzny komponent SVG dla ikony strzałki
 *
 * @styling
 * - Wykorzystuje dedykowane style: error404.css
 * - Kompatybilny z dark/light mode
 *
 * @example
 * // Używany automatycznie przez Next.js dla ścieżek 404
 * <Custom404 />
 */

/**
 * Arrow - Komponent ikony strzałki
 *
 * Dostępny komponent SVG używany w przycisku powrotu.
 * Zawiera odpowiednie atrybuty ARIA i jest ukryty przed czytnikami ekranu.
 *
 * @accessibility
 * - aria-hidden="true"
 * - focusable="false"
 * - role="img"
 */

import Link from "next/link"
import "@/styles/App.css"
import "@/styles/error404.css"
import { fascinate } from "@/components/Fonts"
import { Metadata } from "next"
import { getTranslationsSection } from "@/i18n/translations"
import { generateHref } from "@/lib/i18n"

export const metadata: Metadata = {
    title: "404: Page Not Found - Grzegorz Kocik - Front-end Developer",
    description:
        "The page you're looking for cannot be found. Return to the homepage of Grzegorz Kocik's portfolio",
}

export default async function Custom404() {
    const t = await getTranslationsSection("notFound")

    const link = await generateHref("/")
    return (
        <>
            <main
                className="error404"
                role="main"
                aria-labelledby="error-title"
            >
                <div className="error-content">
                    <h1
                        id="error-title"
                        className={`${fascinate.className}`}
                    >
                        {t.title} <small>{t.subtitle}</small>
                    </h1>

                    <p
                        role="status"
                        aria-live="polite"
                    >
                        {t.text}
                    </p>

                    <Link
                        href={link}
                        className="btn btn-default"
                        aria-label="Return to the homepage"
                    >
                        <span
                            className="icon"
                            aria-hidden="true"
                        >
                            <Arrow />
                        </span>
                        <span className="button-text">{t.button}</span>
                    </Link>
                </div>
            </main>
        </>
    )
}

const Arrow = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
            width={16}
            height={16}
            role="img"
            aria-hidden="true"
            focusable="false"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M244 400L100 256l144-144M120 256h292"
            />
        </svg>
    )
}
