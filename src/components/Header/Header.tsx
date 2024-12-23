import "./Header.css"
import Logo from "./Logo"
import Menu from "./Menu"

const Header = () => {
    return (
        <header className="top flex">
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
