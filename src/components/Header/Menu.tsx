/**
 * Menu - Główna nawigacja strony
 *
 * Komponent renderuje główne menu nawigacyjne strony z obsługą
 * internacjonalizacji i integracją portfela Web3. Zapewnia pełną
 * dostępność zgodnie ze standardami ARIA.
 *
 * @structure
 * Lista linków nawigacyjnych:
 * - O mnie (scroll do sekcji)
 * - Portfolio (scroll do sekcji)
 * - Blog (osobna strona)
 * - Kontakt (scroll do sekcji)
 * - Przycisk portfela (tylko desktop)
 *
 * @accessibility
 * - Poprawna struktura list z role="menubar"
 * - Właściwe role dla elementów menu
 * - Semantyczne znaczniki HTML
 *
 * @i18n
 * Wykorzystuje przestrzeń nazw "menu" dla tłumaczeń:
 * - about: Link "O mnie"
 * - portfolio: Link "Portfolio"
 * - contact: Link "Kontakt"
 *
 * @responsive
 * - Pełne menu na desktop
 * - Przycisk portfela ukryty na mobile (hidden-xs)
 * - Atrybuty data-mobile-menu-link dla obsługi menu mobilnego
 *
 * @components
 * - WalletButton - Komponent integracji z Web3
 *
 * @styling
 * - Flexbox dla układu
 * - Klasy utility dla RWD
 *
 * @example
 * <Menu />
 */

import Link from "next/link"
import React from "react"
import { WalletButton } from "@/components/Web3/WalletButton"
import { getTranslationsSection } from "@/i18n/translations"
import { getLangUrl } from "@/lib/i18n"

export default async function Menu() {
    const t = await getTranslationsSection("menu")
    const locale = await getLangUrl()

    return (
        <ul
            className="menu flex"
            role="menubar"
        >
            <li role="none">
                <a
                    href={locale + "/#about"}
                    data-mobile-menu-link
                    role="menuitem"
                >
                    {t.about}
                </a>
            </li>
            <li role="none">
                <a
                    href={locale + "/#projects"}
                    data-mobile-menu-link
                >
                    {t.portfolio}
                </a>
            </li>
            <li role="none">
                <Link
                    href={locale + "/blog"}
                    data-mobile-menu-link
                >
                    Blog
                </Link>
            </li>
            <li role="none">
                <a
                    href="#contact"
                    data-mobile-menu-link
                >
                    {t.contact}
                </a>
            </li>
            <li
                className="wallet hidden-xs"
                role="none"
            >
                <WalletButton />
            </li>
        </ul>
    )
}
