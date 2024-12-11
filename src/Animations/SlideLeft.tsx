// components/AnimatedWrapper.client.js
"use client"

import { motion, useScroll, useTransform } from "framer-motion" // Upewnij się, że używasz właściwej biblioteki
import React from "react"
import { slideLeftInitial, slideLeftInView } from "./motion"

const SlideLeft = ({ children, className }: { children: React.ReactNode }) => {
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
