"use client"

import React, { useState, useEffect } from "react"

export default function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false)

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
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={handleToggleMenu}
            >
                <span className="visually-hidden">
                    {isOpen ? "Close menu" : "Open menu"}
                </span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </>
    )
}
