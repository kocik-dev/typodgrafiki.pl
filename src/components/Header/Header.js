import React from 'react';
import logo from '../../assets/logo.svg';
import logoWhite from '../../assets/logo-light.svg';
import darkIcon from '../../assets/dark-mode-icon.svg';
import lightIcon from '../../assets/light-mode-icon.svg';
import {openCv} from '../Cv/Cv';
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

class Header extends React.Component {
    
    state = {
        darkMode: 1
    }
    
    scrollTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    darkModeHandler() {
        document.body.classList.toggle("light-mode");
        this.setState({ 
            darkMode: this.state.darkMode === 0 ? 1 : 0
        });
    }
    
    render() {
        return (
            <header className="top flex">
                <img src={this.state.darkMode ? logo : logoWhite } className="logo" alt="logo" onClick={this.scrollTop} />
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
                    <button className="dark-mode flex" onClick={this.darkModeHandler.bind(this)}>
                        <img src={this.state.darkMode ? darkIcon : lightIcon } alt="Tryb dzień, noc" height="18" width="18" />
                    </button>
                </nav>
            </header>
        );    
    }
    
}

export { Header, linkScroll };
