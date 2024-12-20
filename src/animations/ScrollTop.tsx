"use client"

import React from "react"
import { motion, useScroll, useTransform } from "motion/react"

const Scroll = () => {
    const { scrollY } = useScroll()
    const top = useTransform(scrollY, [0, 200, 280], [-70, -50, 0], {
        clamp: true,
    })

    return (
        <motion.div className="scroll" style={{ top: top }}>
            <a href="#about" className="btn-bubble-bottom">
                <span>
                    <svg
                        width="8"
                        height="15"
                        viewBox="0 0 8 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1L4.5 1ZM3.64645 14.3536C3.84171 14.5488 4.15829 14.5488 4.35355 14.3536L7.53553 11.1716C7.7308 10.9763 7.7308 10.6597 7.53553 10.4645C7.34027 10.2692 7.02369 10.2692 6.82843 10.4645L4 13.2929L1.17157 10.4645C0.976311 10.2692 0.659729 10.2692 0.464467 10.4645C0.269204 10.6597 0.269204 10.9763 0.464467 11.1716L3.64645 14.3536ZM3.5 1L3.5 14L4.5 14L4.5 1L3.5 1Z"
                            fill="currentColor"
                        />
                    </svg>
                    Scroll
                </span>
            </a>
        </motion.div>
    )
}

export default Scroll
