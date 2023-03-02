import React from 'react';
import LightMode from './LightMode';
import logo from '../../assets/logo.svg';
import logoWhite from '../../assets/logo-light.svg';
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

const scrollTop = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

const showMenu = (menuButton) => {
    const menuEl = document.querySelector('.menu');
    const menuLink = document.querySelectorAll('.menu li a, .menu li span, .dark-mode');
    menuEl.classList.toggle('show');
    menuButton.target.classList.toggle('open');
    
    menuLink.forEach(element => {
       element.addEventListener('click', function() {
            menuEl.classList.remove('show');
            menuButton.target.classList.remove('open');
       })
    });
}

const Header = ({ lightMode, changeModeFn }) => {
    return (
        <header className="top flex">
            <img src={lightMode ? logoWhite : logo } className="logo" alt="logo" onClick={scrollTop} />
            <button id="btn-menu-mobile" className="visible-xs" onClick={showMenu}><span></span><span></span><span></span></button>
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
                <LightMode lightMode={lightMode} changeModeFn={changeModeFn} />
            </nav>
        </header>
    );    

}

export { Header, linkScroll };
