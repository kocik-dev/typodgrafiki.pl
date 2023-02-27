import logo from '../../assets/logo.svg';
import darkIcon from '../../assets/dark-mode-icon.svg';
import { openCv} from '../Cv/Cv';
import './Header.css';

const linkScroll = (el) => {
    el.preventDefault();
    const windowHeight = window.innerHeight * .23;
    const elementId = el.target.getAttribute("href");
    const section = document.querySelector(elementId);    
    
    window.scroll({
        top: elementId === '#contact' ? section.offsetTop : section.offsetTop - windowHeight,
        behavior: 'smooth'
    });    
}

const Header = () => {
    return (
        <header className="top flex">
            <img src={logo} className="logo" alt="logo" />
            <nav className="menu flex">
                <ul className="flex">
                    <li>
                        <a href="#about" onClick={linkScroll}>o mnie</a>
                    </li>
                    <li>
                        <span onClick={openCv}>cv.pdf</span>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={linkScroll}>sprawdź mnie</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={linkScroll}>kontakt</a>
                    </li>
                </ul>
                <button className="dark-mode flex">
                    <img src={darkIcon} alt="Tryb dzień, noc" height="18" width="18" />
                </button>
            </nav>
        </header>
    );
}

export { Header, linkScroll };
