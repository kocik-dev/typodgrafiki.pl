import Link from "next/link"
import React from "react"
import { useTranslations } from "next-intl"
import { WalletButton } from "@/components/Web3/WalletButton"

export default function Menu() {
    const t = useTranslations("menu")

    return (
        <ul className="menu flex" role="menubar">
            <li role="none">
                <a href="/#about" data-mobile-menu-link role="menuitem">
                    {t("about")}
                </a>
            </li>
            <li role="none">
                <a href="/#projects" data-mobile-menu-link>
                    {t("portfolio")}
                </a>
            </li>
            <li role="none">
                <Link href="/blog" data-mobile-menu-link>
                    Blog
                </Link>
            </li>
            <li role="none">
                <a href="#contact" data-mobile-menu-link>
                    {t("contact")}
                </a>
            </li>
            <li className="wallet hidden-xs" role="none">
                <WalletButton />
            </li>
        </ul>
    )
}
