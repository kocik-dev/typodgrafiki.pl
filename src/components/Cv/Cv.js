import { dataTemplate } from './dataTemplate.js'
import './Cv.css';

const openCv = () => {
    
    const cvElement = document.createElement("div");
    const fadeContent = document.createElement("div");
    cvElement.classList.add('modal');
    fadeContent.classList.add('shadow');
    document.body.appendChild(fadeContent);
    document.body.appendChild(cvElement);
    document.body.style.overflow = 'hidden';
    
    setTimeout(function () {
        cvElement.classList.add('loading');
        setTimeout(function () {
            cvElement.classList.add('show');
            cvElement.classList.remove('loading');
            setTimeout(function () {
                cvElement.innerHTML = dataTemplate;
            }, 1200);
        }, 750);
    }, 750);
    
}

export { openCv }