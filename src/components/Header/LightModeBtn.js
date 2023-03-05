import React from 'react';
import PropTypes from 'prop-types';
import darkIcon from '../../assets/dark-mode-icon.svg';
import lightIcon from '../../assets/light-mode-icon.svg';

const LightModeBtn = ({ lightMode, changeModeFn }) => {
    
    return (
        <button className="dark-mode flex" onClick={changeModeFn}>
            <img src={lightMode ? lightIcon : darkIcon } alt="Tryb dzień, noc" height="18" width="18" />
        </button>
    )    
}

LightModeBtn.propTypes = {
    lightMode: PropTypes.number,
    changeModeFn: PropTypes.func
}

LightModeBtn.defaultProps = {
    lightMode: 0
}

export default LightModeBtn