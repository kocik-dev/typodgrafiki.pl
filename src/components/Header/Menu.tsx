import Link from "next/link"
import React from "react"
import { useTranslations } from "next-intl"

export default function Menu() {
    const t = useTranslations("menu")

    return (
        <ul className="menu flex">
            <li>
                <a href="/#about">{t("about")}</a>
            </li>
            <li>
                <a href="/#projects">{t("portfolio")}</a>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <a href="/#contact">{t("contact")}</a>
            </li>
            <li className="wallet">
                <a
                    href="#"
                    className="btn btn-default"
                >
                    {t("wallet")}
                </a>
            </li>
        </ul>
    )
}
