import React from 'react';
import faceBig from '../../assets/face.png';
import { linkScroll } from '../Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div id="main" className="window-height">
            <div className="caption flex">
                <img src={faceBig} className="face" alt="Grzegorz Kocik" aria-hidden width="81" height="81" />    
                <div>
                    <h1 className="title">Grzegorz Kocik</h1>
                    <h2 className="flex subtitle">Front-end Developer <span className="space"></span> UI Designer</h2>
                    <a href="#about" className="btn btn-default" onClick={linkScroll}>Poznaj mnie</a>
                </div>
            </div>
        </div>
    );
}

export default Main;