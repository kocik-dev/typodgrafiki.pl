import "./Header.css"
import Logo from "./Logo"
import Menu from "./Menu"

const Header = () => {
    return (
        <header className="top flex">
            <Logo />
            <nav className="menu flex">
                <Menu />
            </nav>
        </header>
    )
}

const MenuMobile = () => {
    return (
        <button
            id="btn-menu-mobile"
            className="visible-xs"
            aria-label="Menu"
            // onClick={showMenu}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export { Header, MenuMobile }
