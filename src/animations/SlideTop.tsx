"use client"

import { motion } from "motion/react"
import React from "react"

const SlideTop = ({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) => {
    return (
        <motion.div
            className={`${className} animation`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default SlideTop
