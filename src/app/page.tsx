import React from "react"
import { Header } from "@/components/Header/Header"
import Main from "@/components/Main/Main"
import Footer from "@/components/Footer/Footer"
import About from "@/components/About/About"
import Portfolio from "@/components/Portfolio/Portfolio"
import Contact from "@/components/Contact/Contact"

const Home = () => {
    return (
        <div className="bg-gradient">
            <div className="content">
                <Header />
                <Main />
                {/* <About />
                <Portfolio />
                <Contact /> */}
            </div>
            <Footer />
        </div>
    )
}

export default Home

// import { useTranslations } from "next-intl"

// export default function HomePage() {
//     const t = useTranslations("HomePage")
//     return <h1>{t("title")}</h1>
// }
