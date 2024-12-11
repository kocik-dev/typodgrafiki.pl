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
            className={className}
            initial={slideLeftInitial}
            whileInView={slideLeftInView}
        >
            {children}
        </motion.div>
    )
}

export default SlideLeft

const slideLeftInitial = {
    transform: "translateX(60px)",
    opacity: 0,
}
const slideLeftInView = {
    transform: "translateX(0px)",
    opacity: 1,
}
