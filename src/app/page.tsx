import React from "react"
import Main from "@/components/Main/Main"
import Footer from "@/components/Footer/Footer"
import About from "@/components/About/About"
import Portfolio from "@/components/Portfolio/Portfolio"
import Contact from "@/components/Contact/Contact"
import BottomMenu from "@/components/BottomMenu"

const Home = () => {
    return (
        <>
            <Main />
            <div className="bg-white">
                <About />
                <Portfolio />
                {/* <Contact /> */}
                <Footer />
                <BottomMenu />
            </div>
        </>
    )
}

export default Home
