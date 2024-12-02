"use client"
import React, { useState } from "react"
import { Header } from "../components/Header/Header"
import Main from "../components/Main/Main"
import Footer from "../components/Footer/Footer"
import About from "../components/About/About"
import Portfolio from "../components/Portfolio/Portfolio"
import Contact from "../components/Contact/Contact"

const Home: React.FC = () => {
    const [lightMode, setLightMode] = useState<boolean>(false)

    const toggleLightMode = (): void => {
        setLightMode((prevLightMode) => !prevLightMode)
    }

    return (
        <div className={lightMode ? "light-mode bg-gradient" : "bg-gradient"}>
            <Header
                lightMode={lightMode}
                changeModeFn={toggleLightMode}
            />
            <Main />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
