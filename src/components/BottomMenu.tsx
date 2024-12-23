"use client"

import React from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import logo from "@/assets/logo-small.svg"
import MenuMobile from "./Header/MenuMobile"

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
            <div
                id="bottom-menu"
                role="navigation"
                aria-label="Fixed navigation menu"
            >
                <motion.div
                    className="element"
                    style={{ bottom: bottom }}
                >
                    <a
                        href="/#top"
                        className="logo-small hidden-xs"
                        aria-label="Back to top"
                        role="button"
                    >
                        <Image
                            src={logo}
                            alt="logo"
                            width={20}
                            height={25}
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Back to top</span>
                    </a>
                    {children}
                </motion.div>
                <MenuMobile />
            </div>
        </>
    )
}
