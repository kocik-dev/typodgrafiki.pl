"use client"

import { motion } from "motion/react"
import React from "react"

const SlideLeft = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <motion.div
            className={`${className} animation`}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default SlideLeft
