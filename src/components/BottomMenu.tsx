/**
 * BottomMenu - Przyklejone menu dolne z animacją scrollowania
 *
 * Komponent wyświetla stałe menu na dole ekranu, które animuje się podczas
 * przewijania strony. Zawiera logo (na desktop) oraz przyjmuje komponenty menu
 * jako children. Zintegrowany z mobilnym przyciskiem menu.
 *
 * @features
 * - Animacja pojawiania się przy scrollowaniu
 * - Responsywny układ (desktop/mobile)
 * - Przycisk powrotu do góry strony
 * - Integracja z MenuMobile
 *
 * @props
 * - children: React.ReactNode - Komponenty menu (zazwyczaj Menu)
 *
 * @animation
 * Wykorzystuje framer-motion:
 * - Śledzenie scrollY
 * - Transform bottom: -50px -> 40px
 * - Zakres animacji: 100px -> 200px scrolla
 * - Clamp dla ograniczenia zakresu
 *
 * @accessibility
 * - role="navigation" dla landmarks
 * - aria-label dla menu
 * - aria-hidden dla dekoracyjnego logo
 * - visually-hidden dla tekstów pomocniczych
 * - Dostępna nawigacja klawiaturą
 *
 * @responsive
 * - Logo ukryte na mobile (hidden-xs)
 * - Różne style dla desktop/mobile
 * - MenuMobile dla widoku mobilnego
 *
 * @i18n
 * Wykorzystuje przestrzeń nazw "menu":
 * - toTop: Tekst dla przycisku powrotu
 *
 * @example
 * ```jsx
 * <BottomMenu>
 *   <Menu />
 * </BottomMenu>
 * ```
 */

"use client"

import React from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import logo from "@/assets/logo-small.svg"
import MenuMobile from "./Header/MenuMobile"
import { useTranslations } from "next-intl"

export default function BottomMenu({
    children,
}: {
    children: React.ReactNode
}) {
    const { scrollY } = useScroll()
    const bottom = useTransform(scrollY, [100, 200], [-50, 40], {
        clamp: true,
    })

    const t = useTranslations("menu")

    return (
        <>
            <div
                id="bottom-menu"
                role="navigation"
                aria-label="Fixed navigation menu"
            >
                <motion.div
                    className="element"
                    style={{ bottom: bottom }}
                >
                    <a
                        href="/#top"
                        className="logo-small hidden-xs"
                        aria-label={t("toTop")}
                        role="button"
                    >
                        <Image
                            src={logo}
                            alt="logo"
                            width={20}
                            height={25}
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">{t("toTop")}</span>
                    </a>
                    {children}
                </motion.div>
                <MenuMobile />
            </div>
        </>
    )
}
