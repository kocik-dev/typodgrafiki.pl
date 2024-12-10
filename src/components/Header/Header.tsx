import LightModeBtn from "./LightModeBtn"
import "./Header.css"
import Link from "next/link"
import Logo from "./Logo"

interface HeaderProps {
    lightMode: boolean
    changeModeFn?: () => void
}

const linkScroll = (el: any): void => {
    el.preventDefault()
    const windowHeight = window.innerHeight * 0.23
    const elementId = el.target.getAttribute("href")
    const section = document.querySelector<HTMLElement>(elementId)

    if (section) {
        window.scroll({
            top:
                elementId === "#contact"
                    ? section.offsetTop
                    : section.offsetTop - windowHeight,
            behavior: "smooth",
        })
    }
}

const Header: React.FC<HeaderProps> = ({ lightMode, changeModeFn }) => {
    const showMenu = (menuButton: any): void => {
        const menuEl = document.querySelector<HTMLElement>(".menu")
        const menuLink = document.querySelectorAll<HTMLElement>(
            ".menu li a, .menu li span, .dark-mode"
        )

        menuEl != null && menuEl.classList.toggle("show")
        menuButton != null && menuButton.target.classList.toggle("open")

        menuLink.forEach((element) => {
            element.addEventListener("click", function () {
                menuEl != null && menuEl.classList.remove("show")
                menuButton != null && menuButton.target.classList.remove("open")
            })
        })
    }

    return (
        <header className="top flex">
            <Logo />
            <button
                id="btn-menu-mobile"
                className="visible-xs"
                aria-label="Menu"
                onClick={showMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className="menu flex">
                <ul className="flex">
                    <li>
                        <a href="/#about">o mnie</a>
                    </li>
                    <li>
                        <Link href="/blog">blog</Link>
                    </li>
                    <li>
                        <a href="/#portfolio">sprawdź mnie</a>
                    </li>
                    <li>
                        <a href="/#contact">kontakt</a>
                    </li>
                </ul>
                <LightModeBtn
                    lightMode={lightMode}
                    changeModeFn={changeModeFn}
                />
            </nav>
        </header>
    )
}

export { Header, linkScroll }
