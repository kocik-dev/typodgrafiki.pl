/**
 * BlogLayout - Komponent układu dla sekcji bloga
 *
 * Layout wrapper dla wszystkich podstron bloga. Zapewnia spójny układ z headerem,
 * contentem, stopką oraz menu nawigacyjnym. Wykorzystuje dedykowane style dla bloga.
 *
 * @structure
 * - blog-layout (kontener główny)
 *   - blog-header (z własnym kontenerem)
 *   - bg-white (sekcja z contentem)
 *     - dynamiczna zawartość (children)
 *     - Footer
 *     - BottomMenu z Menu
 *
 * @param {ReactNode} children - Zawartość podstrony do wyrenderowania
 *
 * @styling
 * - Wykorzystuje dedykowane style z blog.css
 * - Używa klas Tailwind (bg-white)
 * - Responsywny układ z container
 *
 * @dependencies
 * - Header - Komponent nagłówka
 * - Footer - Komponent stopki
 * - BottomMenu - Komponent menu dolnego
 * - Menu - Komponent nawigacji
 *
 * @example
 * // Używany automatycznie przez Next.js jako layout dla /blog/*
 * <BlogLayout>
 *   <BlogPage />
 * </BlogLayout>
 */

import Footer from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { ReactNode } from "react"
import "@/styles/blog.css"
import BottomMenu from "@/components/BottomMenu"
import Menu from "@/components/Header/Menu"

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
