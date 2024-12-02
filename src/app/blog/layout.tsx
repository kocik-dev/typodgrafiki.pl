"use client"

import React, { useState } from "react"
import { Header } from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [lightMode, setLightMode] = useState<boolean>(false)

    const toggleLightMode = (): void => {
        setLightMode((prevLightMode) => !prevLightMode)
    }

    return (
        <div className="bg-gradient">
            <Header
                lightMode={lightMode}
                changeModeFn={toggleLightMode}
            />
            <div>{children}</div>
            <Footer />
        </div>
    )
}
