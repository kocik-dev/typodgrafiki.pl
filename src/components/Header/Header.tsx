/**
 * Header - Komponent nagłówka strony
 *
 * Główny nagłówek strony zawierający logo oraz menu nawigacyjne.
 * Zaprojektowany zgodnie z zasadami dostępności i semantycznego HTML.
 *
 * @structure
 * - header (banner)
 *   - Logo
 *   - nav
 *     - Menu
 *
 * @components
 * - Logo - Komponent logo strony
 * - Menu - Komponent menu nawigacyjnego
 *
 * @accessibility
 * - role="banner" dla głównego nagłówka
 * - Odpowiednie etykiety ARIA dla nagłówka i nawigacji
 * - Semantyczna struktura z użyciem <header> i <nav>
 *
 * @styling
 * - Header.css dla stylowania
 * - Flexbox dla układu
 * - Responsywny design
 *
 * @example
 * <Header />
 */

import "./Header.css"
import Logo from "./Logo"
import Menu from "./Menu"

const Header = () => {
    return (
        <header
            role="banner"
            className="top flex"
            aria-label="Site header"
        >
            <Logo />
            <nav
                className="flex"
                aria-label="Main navigation"
            >
                <Menu />
            </nav>
        </header>
    )
}

export { Header }
