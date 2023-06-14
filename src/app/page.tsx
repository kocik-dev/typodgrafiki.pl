"use client"
import React, { useState, useEffect } from "react"
import { Header } from "../components/Header/Header"
import Main from "../components/Main/Main"
import Footer from "../components/Footer/Footer"
import About from "../components/About/About"
import Portfolio from "../components/Portfolio/Portfolio"
import Contact from "../components/Contact/Contact"
import { OpenCv } from "../components/Cv/Cv"

const Home: React.FC = () => {
    const [lightMode, setLightMode] = useState<boolean>(false)
    const [isOpenCv, setIsOpenCv] = useState<boolean>(false)

    const toggleLightMode = (): void => {
        setLightMode((prevLightMode) => !prevLightMode)
    }

    const handleOpenCv = () => {
        setIsOpenCv(!isOpenCv)
    }

    useEffect(() => {
        const urlHash = window.location.hash
            .replace("#", "")
            .toLocaleLowerCase()
        if (urlHash === "cv") {
            setIsOpenCv(true)
        }
    }, [])

    return (
        <div className={lightMode ? "light-mode bg-gradient" : "bg-gradient"}>
            <Header
                lightMode={lightMode}
                changeModeFn={toggleLightMode}
                openCv={handleOpenCv}
            />
            <Main />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
            {isOpenCv && <OpenCv openCv={handleOpenCv} />}
        </div>
    )
}

export default Home
