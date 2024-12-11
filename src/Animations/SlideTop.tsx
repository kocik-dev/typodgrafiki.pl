// components/AnimatedWrapper.client.js
"use client"

import { motion, useScroll, useTransform } from "framer-motion" // Upewnij się, że używasz właściwej biblioteki
import React from "react"
import { slideLeftInitial, slideLeftInView } from "./motion"

const SlideTop = ({ children, className }: { children: React.ReactNode }) => {
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
