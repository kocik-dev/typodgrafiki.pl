import React from "react"
import Main from "@/components/Main/Main"
import Footer from "@/components/Footer/Footer"
import About from "@/components/About/About"
import Portfolio from "@/components/Portfolio/Portfolio"
import BottomMenu from "@/components/BottomMenu"
import Menu from "@/components/Header/Menu"
import { MessagesProps } from "@/types/i18n"

const PageHome = ({ messages }: MessagesProps) => {
    return (
        <>
            <Main messages={messages} />
            <div className="bg-white">
                <About />
                <Portfolio />
                <Footer />
                <BottomMenu>
                    <Menu />
                </BottomMenu>
            </div>
        </>
    )
}

export default PageHome
