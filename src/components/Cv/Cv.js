import { dataTemplate } from './dataTemplate.js'
import './Cv.css';

const openCv = () => {
    
    const cvElement = document.createElement("div");
    const closeEl = document.createElement("button");
    const fadeContent = document.createElement("div");
    cvElement.classList.add('modal');
    fadeContent.classList.add('shadow');
    closeEl.setAttribute('id', 'close-modal');
    closeEl.classList.add('close', 'btn');
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
        closeCv(cvElement, fadeContent);    
    })
    
    document.addEventListener("keydown", (event) => {
        if(event.key === 'Escape') {
            closeCv(cvElement, fadeContent);
        }
    });
}

const closeCv = (modal, shadow) => {
    modal.classList.add('detach');
    document.body.style = false;
    setTimeout(function () {
        shadow.style.opacity = 0;
        setTimeout(function () {
            modal.remove();
            shadow.remove();
        }, 200);
    }, 200);
}

export { openCv }