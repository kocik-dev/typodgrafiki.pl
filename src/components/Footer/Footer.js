import React from 'react';
import iconLinkedin from '../../assets/social/linkedin.svg';
import iconBehance from '../../assets/social/behance.svg';
import iconInstagram from '../../assets/social/instagram.svg';
import './Footer.css';

const Footer = () => { 
    return (
        <footer className="footer flex">
            <div className="relative">
                <div className="social">
                    <a href="https://www.linkedin.com/in/grzegorz-kocik/" target="_blank" rel="noopener noreferrer">
                        <img src={iconLinkedin} alt="Linkedin" width="18" height="18" />
                    </a>
                    <a href="https://www.behance.net/grzegorz-kocik" target="_blank" rel="noopener noreferrer">
                        <img src={iconBehance} alt="Behance" width="18" height="18" />
                    </a>
                    <a href="https://www.instagram.com/typodgrafiki/" target="_blank" rel="noopener noreferrer">
                        <img src={iconInstagram} alt="Instagram" width="18" height="18" />
                    </a>
                </div>
            </div>
            <div className="copyright text-center">
                &#169; 2023 typodgrafiki.pl &#8226; Grzegorz Kocik &#8226; Front-end developer | UI Designer
            </div>
        </footer>
    );
}

export default Footer;