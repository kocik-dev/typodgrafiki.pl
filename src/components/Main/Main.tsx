import Image from "next/image"
import { linkScroll } from "../Header/Header"
import "./Main.css"
import faceW from "../../assets/face/face.webp"
import { fascinate } from "../../components/Fonts"

const Main: React.FC = () => {
    return (
        <div
            id="main"
            className="window-height margin-section"
        >
            <div className="caption flex">
                <div className="face">
                    <Image
                        src={faceW}
                        alt="Grzegorz Kocik"
                        height={116}
                        width={116}
                    />
                </div>
                <div>
                    <h1 className={`title ${fascinate.className}`}>
                        Front-end Developer
                    </h1>
                    <h2 className="flex subtitle">
                        specjalizujący się w e-commerce
                    </h2>
                    <a
                        href="#about"
                        className="btn btn-default btn-main"
                        onClick={linkScroll}
                    >
                        Poznaj mnie
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Main
