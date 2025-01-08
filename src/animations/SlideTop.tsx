/**
 * SlideTop - Komponent animacji wejścia elementu od dołu
 *
 * Wrapper komponentu, który dodaje animację wejścia elementu - pojawienie się
 * poprzez przesunięcie z dołu do góry i zmianę przezroczystości.
 * Animacja uruchamia się, gdy element pojawi się w widoku (whileInView).
 *
 * @param {React.ReactNode} children - Zawartość do animowania
 * @param {string} className - Opcjonalne dodatkowe klasy CSS
 * @param {number} delay - Opcjonalne opóźnienie animacji (domyślnie 0)
 *
 * @animation
 * - Początek: element przesunięty 40px w dół, przezroczysty (opacity: 0)
 * - Koniec: element na pozycji docelowej (y: 0), w pełni widoczny (opacity: 1)
 *
 * @example
 * <SlideTop className="my-class" delay={0.2}>
 *   <div>Animowana zawartość</div>
 * </SlideTop>
 */

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
