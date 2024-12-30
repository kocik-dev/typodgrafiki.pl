import Link from "next/link"
import "@/styles/App.css"
import "@/styles/error404.css"
import { fascinate } from "@/components/Fonts"

import { Metadata } from "next"
import { useTranslations } from "next-intl"

export const metadata: Metadata = {
    title: "404: Page Not Found - Grzegorz Kocik - Front-end Developer",
    description:
        "The page you're looking for cannot be found. Return to the homepage of Grzegorz Kocik's portfolio",
}

export default function Custom404() {
    const t = useTranslations("notFound")
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
                        {t("title")} <small>{t("subtitle")}</small>
                    </h1>

                    <p
                        role="status"
                        aria-live="polite"
                    >
                        {t("text")}
                    </p>

                    <Link
                        href="/"
                        className="btn btn-default"
                        aria-label="Return to the homepage"
                    >
                        <span
                            className="icon"
                            aria-hidden="true"
                        >
                            <Arrow />
                        </span>
                        <span className="button-text">{t("button")}</span>
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
