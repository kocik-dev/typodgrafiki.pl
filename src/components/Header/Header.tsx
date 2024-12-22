import "./Header.css"
import Logo from "./Logo"
import Menu from "./Menu"
import MenuMobile from "./MenuMobile"

const Header = () => {
    return (
        <header className="top flex">
            <Logo />
            <MenuMobile />
            <nav className="flex" aria-label="Main navigation">
                <Menu />
            </nav>
        </header>
    )
}

export { Header }
