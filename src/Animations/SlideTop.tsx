"use client"

import { motion } from "motion/react"
import React from "react"

const SlideTop = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
        >
            {children}
        </motion.div>
    )
}

export default SlideTop
