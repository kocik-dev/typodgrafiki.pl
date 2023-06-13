import Image from "next/image"
import { linkScroll } from "../Header/Header"
import "./Main.css"
import faceW from "../../assets/face/face.webp"

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
                    <h1 className="title">Grzegorz Kocik</h1>
                    <h2 className="flex subtitle">
                        Front-end Developer <span className="space"></span> UI
                        Designer
                    </h2>
                    <a
                        href="#about"
                        className="btn btn-default"
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
