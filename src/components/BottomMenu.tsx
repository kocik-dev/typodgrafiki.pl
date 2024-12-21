"use client"

import React from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import logo from "@/assets/logo-small.svg"
import { MenuMobile } from "./Header/Header"

export default function BottomMenu({
    children,
}: {
    children: React.ReactNode
}) {
    const { scrollY } = useScroll()
    const bottom = useTransform(scrollY, [100, 200], [-50, 40], {
        clamp: true,
    })

    return (
        <>
            <div id="bottom-menu" className="hidden-xs">
                <motion.div className="element" style={{ bottom: bottom }}>
                    <a href="/#top" className="logo-small">
                        <Image src={logo} alt="logo" width={20} height={25} />
                    </a>
                    {children}
                </motion.div>
            </div>
            <MenuMobile />
        </>
    )
}
