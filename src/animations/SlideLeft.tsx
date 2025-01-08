/**
 * SlideLeft - Komponent animacji wejścia elementu od prawej strony
 *
 * Wrapper komponentu, który dodaje animację wejścia elementu - pojawienie się
 * poprzez przesunięcie z prawej strony i zmianę przezroczystości.
 * Animacja uruchamia się, gdy element pojawi się w widoku (whileInView).
 *
 * @param {React.ReactNode} children - Zawartość do animowania
 * @param {string} className - Opcjonalne dodatkowe klasy CSS
 *
 * @animation
 * - Początek: element przesunięty 60px w prawo, przezroczysty (opacity: 0)
 * - Koniec: element na pozycji docelowej (x: 0), w pełni widoczny (opacity: 1)
 *
 * @example
 * <SlideLeft className="my-class">
 *   <div>Animowana zawartość</div>
 * </SlideLeft>
 */

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
