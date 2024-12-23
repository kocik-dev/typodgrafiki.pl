import Link from "next/link"
import React from "react"
import { useTranslations } from "next-intl"
import ConnectWallet from "../web3/ConnectWallet"

export default function Menu() {
    const t = useTranslations("menu")

    return (
        <ul className="menu flex">
            <li>
                <a
                    href="/#about"
                    data-mobile-menu-link
                >
                    {t("about")}
                </a>
            </li>
            <li>
                <a
                    href="/#projects"
                    data-mobile-menu-link
                >
                    {t("portfolio")}
                </a>
            </li>
            <li>
                <Link
                    href="/blog"
                    data-mobile-menu-link
                >
                    Blog
                </Link>
            </li>
            <li>
                <a
                    href="/#contact"
                    data-mobile-menu-link
                >
                    {t("contact")}
                </a>
            </li>
            <li className="wallet hidden-xs">
                <ConnectWallet />
            </li>
        </ul>
    )
}
