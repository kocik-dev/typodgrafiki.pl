import React from 'react';
import darkIcon from '../../assets/dark-mode-icon.svg';
import lightIcon from '../../assets/light-mode-icon.svg';

const LightMode = ({ lightMode, changeModeFn }) => {
    
    return (
        <button className="dark-mode flex" onClick={changeModeFn}>
            <img src={lightMode ? lightIcon : darkIcon } alt="Tryb dzień, noc" height="18" width="18" />
        </button>
    )    
}

export default LightMode 