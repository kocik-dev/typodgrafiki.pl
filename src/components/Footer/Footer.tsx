import React from "react"
import SocialLink from "./SocialLink/SocialLink"
import "./Footer.css"

interface ISocialData {
    link: string
    name: string
}

const socialLinksData: ISocialData[] = [
    {
        link: "https://www.linkedin.com/in/grzegorz-kocik/",
        name: "linkedin",
    },
    {
        link: "https://www.behance.net/grzegorz-kocik",
        name: "behance",
    },
    {
        link: "https://www.instagram.com/typodgrafiki/",
        name: "instagram",
    },
]

const Footer: React.FC = () => {
    return (
        <footer className="footer flex">
            <div className="relative">
                <div className="social">
                    {socialLinksData.map((item) => (
                        <SocialLink
                            link={item.link}
                            name={item.name}
                            key={item.name}
                        />
                    ))}
                </div>
            </div>
            <div className="copyright text-center">
                &#169; 2023 typodgrafiki.pl &#8226; Grzegorz Kocik &#8226;
                Front-end developer | Web Designer
            </div>
        </footer>
    )
}

export default Footer
