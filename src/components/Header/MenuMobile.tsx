/**
 * MenuMobile - Przycisk hamburger menu dla widoku mobilnego
 *
 * Komponent zarządza stanem menu mobilnego, obsługuje interakcje użytkownika
 * i zapewnia pełną dostępność. Zawiera zaawansowaną obsługę zdarzeń dla
 * różnych scenariuszy interakcji.
 *
 * @features
 * - Przycisk hamburger z animacją
 * - Automatyczne zamykanie po kliknięciu w link
 * - Obsługa klawisza Escape
 * - Zamykanie przy kliknięciu poza menu
 * - Wsparcie dla standardowych linków i komponentów Next.js Link
 * - Pełna obsługa dostępności
 *
 * @state
 * - isOpen: boolean - Stan otwarcia/zamknięcia menu
 *
 * @eventHandlers
 * - handleToggleMenu - Przełączanie stanu menu
 * - handleLinkClick - Zamykanie menu po kliknięciu w link
 * - handleEscape - Obsługa klawisza Escape
 * - handleClickOutside - Obsługa kliknięcia poza menu
 *
 * @accessibility
 * - aria-expanded dla stanu menu
 * - aria-controls wskazujący na kontrolowany element
 * - aria-label zmieniający się ze stanem
 * - Obsługa klawiatury (Escape)
 * - visually-hidden dla czytników ekranu
 *
 * @i18n
 * Wykorzystuje przestrzeń nazw "menu" dla tłumaczeń:
 * - menuOpen: Tekst dla zamkniętego menu
 * - menuClose: Tekst dla otwartego menu
 *
 * @responsive
 * - visible-xs - Widoczne tylko na mobile
 * - Breakpoint 768px dla logiki mobilnej
 *
 * @cleanup
 * - Usuwa nasłuchiwanie zdarzeń przy odmontowaniu
 * - Czyści event listenery dla linków
 *
 * @example
 * <MenuMobile />
 */

"use client"

import { useTranslations } from "next-intl"
import React, { useState, useEffect } from "react"

export default function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations("menu")

    const handleToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleLinkClick = () => {
            if (window.innerWidth < 768) {
                setIsOpen(false)
            }
        }

        // Obsługa standardowych linków
        const menuLinks = document.querySelectorAll("a[data-mobile-menu-link]")
        menuLinks.forEach((link) => {
            link.addEventListener("click", handleLinkClick)
        })

        // Obsługa komponentów Link z Next.js
        const nextLinks = document.querySelectorAll("[data-mobile-menu-link]")
        nextLinks.forEach((link) => {
            // Sprawdzamy, czy element nie jest standardowym linkiem <a>
            if (!(link instanceof HTMLAnchorElement)) {
                link.addEventListener("click", handleLinkClick)
            }
        })

        // Cleanup
        return () => {
            menuLinks.forEach((link) => {
                link.removeEventListener("click", handleLinkClick)
            })
            nextLinks.forEach((link) => {
                if (!(link instanceof HTMLAnchorElement)) {
                    link.removeEventListener("click", handleLinkClick)
                }
            })
        }
    }, [])

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                setIsOpen(false)
            }
        }

        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [isOpen])

    // Opcjonalnie: dodaj obsługę kliknięcia poza menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const mobileMenu = document.getElementById("mobile-menu")
            const menuButton = document.getElementById("btn-menu-mobile")

            if (isOpen && mobileMenu && menuButton) {
                if (
                    !mobileMenu.contains(event.target as Node) &&
                    !menuButton.contains(event.target as Node)
                ) {
                    setIsOpen(false)
                }
            }
        }

        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [isOpen])

    return (
        <>
            <button
                id="btn-menu-mobile"
                className={`visible-xs ${isOpen ? "open" : ""}`}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? t("menuClose") : t("menuOpen")}
                onClick={handleToggleMenu}
            >
                <span className="visually-hidden">
                    {isOpen ? t("menuClose") : t("menuOpen")}
                </span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </>
    )
}
