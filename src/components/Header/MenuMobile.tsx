"use client"

import React, { useState, useEffect } from "react"

export default function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        // Dodaj obsługę kliknięć w linki
        const handleLinkClick = () => {
            if (window.innerWidth < 768) {
                setIsOpen(false)
            }
        }

        // Znajdź wszystkie linki z data atrybutem
        const menuLinks = document.querySelectorAll("[data-mobile-menu-link]")

        // Dodaj event listener do każdego linku
        menuLinks.forEach((link) => {
            link.addEventListener("click", handleLinkClick)
        })

        // Cleanup
        return () => {
            menuLinks.forEach((link) => {
                link.removeEventListener("click", handleLinkClick)
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
