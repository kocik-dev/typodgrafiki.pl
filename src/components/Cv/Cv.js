import { dataTemplate } from './dataTemplate.js'
import './Cv.css';

const openCv = () => {
    
    const cvElement = document.createElement("div");
    const closeEl = document.createElement("button");
    const fadeContent = document.createElement("div");
    cvElement.classList.add('modal');
    fadeContent.classList.add('shadow');
    closeEl.setAttribute('id', 'close-modal');
    closeEl.classList.add('close');
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
                cvElement.appendChild(closeEl);
            }, 1200);
        }, 750);
    }, 750);
    
    closeEl.addEventListener('click', function() {
        console.log(cvElement);
    })
    
}

export { openCv }