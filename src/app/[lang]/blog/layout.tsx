import Footer from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { ReactNode } from "react"
import "@/styles/blog.css"
import BottomMenu from "@/components/BottomMenu"
import Menu from "@/components/Header/Menu"
import { metadataBlog as metadata } from "@/config/metadata.config"

export { metadata }

export default async function BlogLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <div className="blog-layout">
            <div className="blog-header">
                <div className="container">
                    <Header />
                </div>
            </div>
            <div className="bg-white">
                {children}
                <Footer />
                <BottomMenu>
                    <Menu />
                </BottomMenu>
            </div>
        </div>
    )
}
