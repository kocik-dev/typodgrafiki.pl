import React from "react"
import Image from "next/image"
import Menu from "./Header/Menu"
import logo from "@/assets/logo-small.svg"

export default function BottomMenu() {
    return (
        <div id="bottom-menu">
            <div className="element">
                <a
                    href="#top"
                    className="logo-small"
                >
                    <Image
                        src={logo}
                        alt="logo"
                        width={20}
                        height={25}
                    />
                </a>
                <Menu />
            </div>
        </div>
    )
}
