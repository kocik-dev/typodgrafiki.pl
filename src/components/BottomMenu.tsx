"use client"

import React from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import Menu from "./Header/Menu"
import logo from "@/assets/logo-small.svg"

export default function BottomMenu() {
    const { scrollY } = useScroll()
    const bottom = useTransform(scrollY, [100, 200], [-50, 40], {
        clamp: true,
    })

    return (
        <div id="bottom-menu">
            <motion.div className="element" style={{ bottom: bottom }}>
                <a href="#top" className="logo-small">
                    <Image src={logo} alt="logo" width={20} height={25} />
                </a>
                <Menu />
            </motion.div>
        </div>
    )
}
