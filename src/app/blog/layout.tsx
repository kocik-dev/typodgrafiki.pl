import React from "react"
import { Header } from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-gradient">
            <div className="content">
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}
