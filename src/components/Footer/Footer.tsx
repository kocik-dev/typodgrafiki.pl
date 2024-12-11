import React from "react"
import SocialLink from "./SocialLink"
import "./Footer.css"
import Image from "next/image"
import Logo from "../Header/Logo"

interface ISocialData {
    link: string
    name: string
}

const socialLinksData: ISocialData[] = [
    {
        link: "https://www.x.com/kocik_dev/",
        name: "x",
    },
    {
        link: "https://www.instagram.com/kocik.dev/",
        name: "instagram",
    },
    {
        link: "https://www.linkedin.com/in/kocik-dev/",
        name: "linkedin",
    },
]

const Footer: React.FC = () => {
    return (
        <footer className="container">
            <div className="footer">
                <div className="footer-content">
                    <div className="contact">
                        <h2>Contact with me</h2>
                        <div className="buttons">
                            {socialLinksData.map((item) => (
                                <a
                                    href={item.link}
                                    className="btn btn-default"
                                >
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
