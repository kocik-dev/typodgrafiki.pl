import logo from '../../assets/logo.svg';
import darkIcon from '../../assets/dark-mode-icon.svg';
import './Header.css';

function Header() {
    return (
        <header className="top flex">
            <img src={logo} className="logo" alt="logo" />
            <nav className="menu flex">
                <ul className="flex">
                    <li>
                        <a href="#about">o mnie</a>
                    </li>
                    <li>
                        <a href="/cv">cv.pdf</a>
                    </li>
                    <li>
                        <a href="/sprawdz-mnie">sprawdź mnie</a>
                    </li>
                    <li>
                        <a href="/kontakt">kontakt</a>
                    </li>
                </ul>
                <button className="dark-mode flex">
                    <img src={darkIcon} alt="Tryb dzień, noc" height="18" width="18" />
                </button>
            </nav>
        </header>
    );
}

export default Header;
