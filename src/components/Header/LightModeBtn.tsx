import React, { MouseEventHandler } from "react"
import Image from "next/image"
import darkIcon from "../../assets/dark-mode-icon.svg"
import lightIcon from "../../assets/light-mode-icon.svg"

interface LightModeBtnProps {
    lightMode: boolean
    changeModeFn?: () => void
}

const LightModeBtn: React.FC<LightModeBtnProps> = ({
    lightMode,
    changeModeFn,
}) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        if (changeModeFn) {
            changeModeFn()
        }
    }

    return (
        <button
            className="dark-mode flex"
            onClick={handleClick}
        >
            <Image
                src={lightMode ? lightIcon : darkIcon}
                alt="Tryb dzień, noc"
                height="18"
                width="18"
            />
        </button>
    )
}

export default LightModeBtn
