"use client"

import React, { useState } from "react"

export default function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button
                id="btn-menu-mobile"
                className={`visible-xs ${isOpen ? "open" : ""}`}
                aria-expanded="false"
                aria-controls="menu"
                aria-label="Open menu"
                onClick={handleToggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </>
    )
}
