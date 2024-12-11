"use client"

import "./Header.css"
import Logo from "./Logo"
import Menu from "./Menu"

const Header = () => {
    return (
        <header className="top flex">
            <Logo />
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
            <nav className="menu flex">
                <Menu />
            </nav>
        </header>
    )
}

export { Header }
