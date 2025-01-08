/**
 * Home - Główny komponent strony głównej
 *
 * Komponent układu (layout) reprezentujący strukturę strony głównej.
 * Składa się z sekcji: Main (hero), About, Portfolio oraz Footer.
 * Zawiera również menu nawigacyjne (BottomMenu z Menu).
 *
 * Struktura:
 * - Main (sekcja hero)
 * - Biała sekcja zawierająca:
 *   - About (o mnie/firmie)
 *   - Portfolio (projekty)
 *   - Footer (stopka)
 *   - Menu nawigacyjne (BottomMenu)
 *
 * @dependencies
 * - Wymaga wszystkich importowanych komponentów sekcji
 * - Używa Tailwind CSS do stylowania (bg-white)
 *
 * @example
 * // Używany jako główna strona w Next.js
 * <Home />
 */

import React from "react"
import Main from "@/components/Main/Main"
import Footer from "@/components/Footer/Footer"
import About from "@/components/About/About"
import Portfolio from "@/components/Portfolio/Portfolio"
import BottomMenu from "@/components/BottomMenu"
import Menu from "@/components/Header/Menu"

const Home = () => {
    return (
        <>
            <Main />
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

export default Home
