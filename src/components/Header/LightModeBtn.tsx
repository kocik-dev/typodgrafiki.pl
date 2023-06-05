import React, { MouseEventHandler } from "react"
import PropTypes, { InferProps } from "prop-types"
import darkIcon from "../../assets/dark-mode-icon.svg"
import lightIcon from "../../assets/light-mode-icon.svg"

interface LightModeBtnProps {
    lightMode: boolean
    changeModeFn: () => void
}

const LightModeBtn: React.FC<LightModeBtnProps> = ({
    lightMode,
    changeModeFn,
}: InferProps<typeof LightModeBtn.propTypes>) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        changeModeFn()
    }

    return (
        <button
            className="dark-mode flex"
            onClick={handleClick}
        >
            <img
                src={lightMode ? lightIcon : darkIcon}
                alt="Tryb dzień, noc"
                height="18"
                width="18"
            />
        </button>
    )
}

LightModeBtn.propTypes = {
    lightMode: PropTypes.bool,
    changeModeFn: PropTypes.func,
}

LightModeBtn.defaultProps = {
    lightMode: false,
}

export default LightModeBtn
