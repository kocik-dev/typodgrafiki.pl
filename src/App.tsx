import React, { useState } from "react"
import { Header } from "./components/Header/Header.tsx"
import Main from "./components/Main/Main.tsx"
import Footer from "./components/Footer/Footer.tsx"
import About from "./components/About/About.tsx"
import Portfolio from "./components/Portfolio/Portfolio.tsx"
import Contact from "./components/Contact/Contact.tsx"
import "./App.css"
import "./darkMode.css"

const App: React.FC = () => {
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

export default App
