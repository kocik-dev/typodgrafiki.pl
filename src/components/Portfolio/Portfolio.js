import React from 'react';
import { linkScroll } from '../Header/Header';
import iconHtml from '../../assets/tech/html.svg';
import iconJs from '../../assets/tech/js.svg';
import iconReact from '../../assets/tech/react.svg';
import iconGithub from '../../assets/tech/github.svg';
import './Portfolio.css';

const Portfolio = () => {
    return (        
        <section id="portfolio" className="flex horizontal-center margin-section">
            <div className="flex flex-column">
                <div className="caption small-width">
                    <h2 className="title-small">Przykładowe projekty</h2>
                </div>
                <div className="grid wide-width">
                    <a href="http://html.typodgrafiki.pl/" className="box box-html" target="_blank" rel="noopener noreferrer">
                        <span className="name">
                            <small>Semantyka i stylowanie</small>
                            <span className="name-line">
                                HTML / CSS
                                <img src={iconHtml} alt="html i css" width="86" height="50" />
                            </span>
                        </span>
                        <span>
                            <span className="btn btn-white">
                                Otwórz
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 3.5C0.5 1.84315 1.84315 0.5 3.5 0.5H5C5.27614 0.5 5.5 0.723858 5.5 1C5.5 1.27614 5.27614 1.5 5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V8.5C1.5 9.60457 2.39543 10.5 3.5 10.5H8.5C9.60457 10.5 10.5 9.60457 10.5 8.5V7C10.5 6.72386 10.7239 6.5 11 6.5C11.2761 6.5 11.5 6.72386 11.5 7V8.5C11.5 10.1569 10.1569 11.5 8.5 11.5H3.5C1.84315 11.5 0.5 10.1569 0.5 8.5V3.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1C7.5 0.723858 7.72386 0.5 8 0.5H11C11.2761 0.5 11.5 0.723858 11.5 1V4C11.5 4.27614 11.2761 4.5 11 4.5C10.7239 4.5 10.5 4.27614 10.5 4V2.20711L6.85355 5.85355C6.65829 6.04882 6.34171 6.04882 6.14645 5.85355C5.95118 5.65829 5.95118 5.34171 6.14645 5.14645L9.79289 1.5H8C7.72386 1.5 7.5 1.27614 7.5 1Z"/>
                                </svg>
                            </span>
                        </span>
                    </a>
                    <a href="http://js.typodgrafiki.pl/" className="box box-js" target="_blank" rel="noopener noreferrer">
                        <span className="name">
                            <small>Dynamiczne elementy</small>
                            <span className="name-line">
                                JavaScript
                                <img src={iconJs} alt="javascript" width="50" height="50" />
                            </span>
                        </span>
                        <span>
                            <span className="btn btn-white">
                                Otwórz
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 3.5C0.5 1.84315 1.84315 0.5 3.5 0.5H5C5.27614 0.5 5.5 0.723858 5.5 1C5.5 1.27614 5.27614 1.5 5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V8.5C1.5 9.60457 2.39543 10.5 3.5 10.5H8.5C9.60457 10.5 10.5 9.60457 10.5 8.5V7C10.5 6.72386 10.7239 6.5 11 6.5C11.2761 6.5 11.5 6.72386 11.5 7V8.5C11.5 10.1569 10.1569 11.5 8.5 11.5H3.5C1.84315 11.5 0.5 10.1569 0.5 8.5V3.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1C7.5 0.723858 7.72386 0.5 8 0.5H11C11.2761 0.5 11.5 0.723858 11.5 1V4C11.5 4.27614 11.2761 4.5 11 4.5C10.7239 4.5 10.5 4.27614 10.5 4V2.20711L6.85355 5.85355C6.65829 6.04882 6.34171 6.04882 6.14645 5.85355C5.95118 5.65829 5.95118 5.34171 6.14645 5.14645L9.79289 1.5H8C7.72386 1.5 7.5 1.27614 7.5 1Z"/>
                                </svg>
                            </span>
                        </span>
                    </a>
                    <a href="http://react.typodgrafiki.pl/" className="box box-react" target="_blank" rel="noopener noreferrer">
                        <span className="name">
                            <small>Projekt</small>
                            <span className="name-line">
                                React
                                <img src={iconReact} alt="react" width="50" height="50" />
                            </span>
                        </span>
                        <span>
                            <span className="btn btn-white">
                                Otwórz
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 3.5C0.5 1.84315 1.84315 0.5 3.5 0.5H5C5.27614 0.5 5.5 0.723858 5.5 1C5.5 1.27614 5.27614 1.5 5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V8.5C1.5 9.60457 2.39543 10.5 3.5 10.5H8.5C9.60457 10.5 10.5 9.60457 10.5 8.5V7C10.5 6.72386 10.7239 6.5 11 6.5C11.2761 6.5 11.5 6.72386 11.5 7V8.5C11.5 10.1569 10.1569 11.5 8.5 11.5H3.5C1.84315 11.5 0.5 10.1569 0.5 8.5V3.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1C7.5 0.723858 7.72386 0.5 8 0.5H11C11.2761 0.5 11.5 0.723858 11.5 1V4C11.5 4.27614 11.2761 4.5 11 4.5C10.7239 4.5 10.5 4.27614 10.5 4V2.20711L6.85355 5.85355C6.65829 6.04882 6.34171 6.04882 6.14645 5.85355C5.95118 5.65829 5.95118 5.34171 6.14645 5.14645L9.79289 1.5H8C7.72386 1.5 7.5 1.27614 7.5 1Z"/>
                                </svg>
                            </span>
                        </span>
                    </a>
                    <a href="https://github.com/typodgrafiki" className="box box-github" target="_blank" rel="noopener noreferrer">
                        <span className="name">
                            <small>Moje konto</small>
                            <span className="name-line">
                                Github
                                <img src={iconGithub} alt="github" width="50" height="50" />
                            </span>
                        </span>
                        <span>
                            <span className="btn btn-white">
                                Otwórz
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 3.5C0.5 1.84315 1.84315 0.5 3.5 0.5H5C5.27614 0.5 5.5 0.723858 5.5 1C5.5 1.27614 5.27614 1.5 5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V8.5C1.5 9.60457 2.39543 10.5 3.5 10.5H8.5C9.60457 10.5 10.5 9.60457 10.5 8.5V7C10.5 6.72386 10.7239 6.5 11 6.5C11.2761 6.5 11.5 6.72386 11.5 7V8.5C11.5 10.1569 10.1569 11.5 8.5 11.5H3.5C1.84315 11.5 0.5 10.1569 0.5 8.5V3.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1C7.5 0.723858 7.72386 0.5 8 0.5H11C11.2761 0.5 11.5 0.723858 11.5 1V4C11.5 4.27614 11.2761 4.5 11 4.5C10.7239 4.5 10.5 4.27614 10.5 4V2.20711L6.85355 5.85355C6.65829 6.04882 6.34171 6.04882 6.14645 5.85355C5.95118 5.65829 5.95118 5.34171 6.14645 5.14645L9.79289 1.5H8C7.72386 1.5 7.5 1.27614 7.5 1Z"/>
                                </svg>
                            </span>
                        </span>
                    </a>
                </div>
                <a href="#contact" className="link-border" onClick={linkScroll}>Napisz do mnie</a>
            </div>
        </section>
    );
}

export default Portfolio;