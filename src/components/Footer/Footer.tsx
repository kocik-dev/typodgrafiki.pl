import React, { ReactElement } from "react"
import "./Footer.css"
import Logo from "../Header/Logo"

const IconEmail = () => {
    return (
        <svg
            width="16"
            height="12"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 1.63636C2.28992 1.63636 1.71429 2.18583 1.71429 2.86364V15.1364C1.71429 15.8142 2.28992 16.3636 3 16.3636H21C21.7101 16.3636 22.2857 15.8142 22.2857 15.1364V2.86364C22.2857 2.18583 21.7101 1.63636 21 1.63636H3ZM0 2.86364C0 1.28209 1.34315 0 3 0H21C22.6569 0 24 1.28209 24 2.86364V15.1364C24 16.7179 22.6569 18 21 18H3C1.34315 18 0 16.7179 0 15.1364V2.86364Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.18962 3.3432C3.49479 2.9557 4.06023 2.88589 4.45258 3.18728L12 8.98502L19.5474 3.18728C19.9398 2.88589 20.5052 2.9557 20.8104 3.3432C21.1155 3.73071 21.0449 4.28917 20.6525 4.59057L12.5525 10.8128C12.2275 11.0624 11.7725 11.0624 11.4475 10.8128L3.34749 4.59057C2.95514 4.28917 2.88446 3.73071 3.18962 3.3432Z"
                fill="currentColor"
            />
        </svg>
    )
}

const IconTwitter = () => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.2368 7.925L15.0763 2H13.9295L9.72732 7.14459L6.37105 2H2.5L7.57533 9.77954L2.5 15.9928H3.64688L8.08449 10.5599L11.6289 15.9928H15.5L10.2368 7.925ZM8.66595 9.84808L8.15172 9.07341L4.06012 2.90931H5.82166L9.12363 7.88394L9.63787 8.6586L13.93 15.1249H12.1685L8.66595 9.84808Z"
                fill="currentColor"
            />
        </svg>
    )
}

const IconInstagram = () => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.95216 5.30176C6.72994 5.30176 4.88867 7.11128 4.88867 9.36525C4.88867 11.6192 6.6982 13.4287 8.95216 13.4287C11.2061 13.4287 13.0157 11.5875 13.0157 9.36525C13.0157 7.14303 11.1744 5.30176 8.95216 5.30176ZM8.95216 11.9684C7.52359 11.9684 6.34899 10.7938 6.34899 9.36525C6.34899 7.93668 7.52359 6.76207 8.95216 6.76207C10.3807 6.76207 11.5553 7.93668 11.5553 9.36525C11.5553 10.7938 10.3807 11.9684 8.95216 11.9684Z"
                fill="currentColor"
            />
            <path
                d="M13.1745 6.12691C13.683 6.12691 14.0952 5.71473 14.0952 5.20628C14.0952 4.69783 13.683 4.28564 13.1745 4.28564C12.6661 4.28564 12.2539 4.69783 12.2539 5.20628C12.2539 5.71473 12.6661 6.12691 13.1745 6.12691Z"
                fill="currentColor"
            />
            <path
                d="M15.5553 2.82551C14.7299 1.96837 13.5553 1.52393 12.222 1.52393H5.68228C2.92037 1.52393 1.0791 3.3652 1.0791 6.1271V12.635C1.0791 14.0001 1.52355 15.1747 2.41243 16.0319C3.26958 16.8573 4.41244 17.27 5.71402 17.27H12.1902C13.5553 17.27 14.6981 16.8255 15.5235 16.0319C16.3807 15.2065 16.8251 14.0319 16.8251 12.6668V6.1271C16.8251 4.79377 16.3807 3.65091 15.5553 2.82551ZM15.4283 12.6668C15.4283 13.6509 15.0791 14.4446 14.5077 14.9842C13.9362 15.5239 13.1426 15.8096 12.1902 15.8096H5.71402C4.76164 15.8096 3.96799 15.5239 3.39656 14.9842C2.82513 14.4128 2.53942 13.6192 2.53942 12.635V6.1271C2.53942 5.17472 2.82513 4.38107 3.39656 3.80964C3.93624 3.26996 4.76164 2.98424 5.71402 2.98424H12.2537C13.2061 2.98424 13.9997 3.26996 14.5712 3.84139C15.1108 4.41281 15.4283 5.20647 15.4283 6.1271V12.6668Z"
                fill="currentColor"
            />
        </svg>
    )
}

const IconLinkedin = () => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.5223 15.9423V10.3778C13.5223 10.3778 13.2188 9.21444 12.106 9.26492C10.9931 9.31541 10.6391 9.49257 10.133 10.0996V15.9423H7.27489V7.11482H10.1076V8.40482C10.1076 8.40482 11.0182 6.60904 12.9404 6.73541C14.6856 6.86177 16.0007 7.92412 16.2789 10.2511H16.3547V15.9419H13.5223V15.9423ZM3.8859 5.9769C2.94991 5.9769 2.19141 5.21808 2.19141 4.257C2.19141 3.32102 2.95023 2.53711 3.8859 2.53711C4.82157 2.53711 5.5804 3.29593 5.5804 4.257C5.5804 5.19268 4.82157 5.9769 3.8859 5.9769ZM5.30227 15.9423H2.46954V7.11482H5.30227V15.9423Z"
                fill="currentColor"
            />
        </svg>
    )
}

interface ISocialData {
    link: string
    name: string
    primary?: boolean
    icon: ReactElement
}

const socialLinksData: ISocialData[] = [
    {
        primary: true,
        link: "mailto:...",
        name: "Send me an email",
        icon: <IconEmail />,
    },
    {
        link: "https://www.x.com/kocik_dev/",
        name: "formerly known as Twitter",
        icon: <IconTwitter />,
    },
    {
        link: "https://www.instagram.com/kocik.dev/",
        name: "Instagram",
        icon: <IconInstagram />,
    },
    {
        link: "https://www.linkedin.com/in/kocik-dev/",
        name: "Linkedin",
        icon: <IconLinkedin />,
    },
]

const Footer: React.FC = () => {
    return (
        <footer className="container">
            <div className="footer">
                <div className="footer-content">
                    <div className="contact">
                        <h2>Contact with me</h2>
                        <div className="buttons flex flex-wrap">
                            {socialLinksData.map((item) => (
                                <a
                                    href={item.link}
                                    className={`btn ${
                                        item.primary
                                            ? "btn-default"
                                            : "btn-transparent"
                                    }`}
                                >
                                    {item.icon}
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="dark">
                        <Logo />
                    </div>
                    <div className="light">
                        <p>
                            Made with <strong>Nextjs</strong> in Poznan, Poland.
                        </p>
                    </div>
                </div>
            </div>
            <p>&#169; 2024 Grzegorz Kocik. All rights reserved.</p>
        </footer>
    )
}

export default Footer
