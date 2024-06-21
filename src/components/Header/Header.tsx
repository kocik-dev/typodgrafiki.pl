import Image from "next/image"
import LightModeBtn from "./LightModeBtn"
import logo from "../../assets/logo.svg"
import logoWhite from "../../assets/logo-light.svg"
import "./Header.css"

interface HeaderProps {
    lightMode: boolean
    changeModeFn?: () => void
    openCv?: () => void
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

const Header: React.FC<HeaderProps> = ({ lightMode, changeModeFn, openCv }) => {
    const scrollTop = (): void => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    }

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
            <Image
                src={lightMode ? logoWhite : logo}
                className="logo"
                alt="logo"
                onClick={scrollTop}
                width={159}
                height={23}
            />
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
                        <a
                            href="#about"
                            onClick={linkScroll}
                        >
                            o mnie
                        </a>
                    </li>
                    {/* <li>
                        <span onClick={openCv}>cv.pdf</span>
                    </li> */}
                    <li>
                        <a
                            href="#portfolio"
                            onClick={linkScroll}
                        >
                            sprawdź mnie
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={linkScroll}
                        >
                            kontakt
                        </a>
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
