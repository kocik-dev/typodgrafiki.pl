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
