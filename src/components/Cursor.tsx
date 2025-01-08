/**
 * Cursor - Niestandardowy animator kursora
 *
 * Komponent renderuje animowany kursor w postaci okręgu na warstwie canvas,
 * który płynnie podąża za kursorem myszy i reaguje na interaktywne elementy.
 * Widoczny tylko na desktopie.
 *
 * @features
 * - Płynna animacja ruchu (lerp)
 * - Responsywne skalowanie canvas
 * - Interaktywna zmiana rozmiaru nad klikalnymi elementami
 * - Optymalizacja wydajności przez requestAnimationFrame
 * - High DPI support
 *
 * @state
 * Wykorzystuje refs do przechowywania:
 * - mousePos: Aktualna pozycja kursora
 * - lastPos: Ostatnia pozycja do interpolacji
 * - radiusRef: Aktualny promień kursora
 * - targetRadius: Docelowy promień do interpolacji
 *
 * @constants
 * - promien: number (20) - Domyślny promień kursora
 * - promienHover: number (0) - Promień przy hover na interaktywnych elementach
 *
 * @effects
 * 1. Śledzenie ruchu myszy
 * 2. Inicjalizacja i rendering canvas
 * 3. Obsługa interakcji z elementami (a, button)
 *
 * @animations
 * - Interpolacja liniowa (lerp) dla płynnego ruchu (0.11)
 * - Interpolacja rozmiaru kursora (0.2)
 * - requestAnimationFrame dla płynnej animacji
 *
 * @responsive
 * - Ukryty na urządzeniach mobilnych (hidden-xs)
 * - Skalowanie canvas pod devicePixelRatio
 *
 * @performance
 * - Optymalizacja przez RAF
 * - Cleanup event listenerów
 * - Efektywne skalowanie canvas
 *
 * @example
 * ```jsx
 * // Dodaj na poziomie layoutu
 * <Cursor />
 * ```
 *
 * @dependencies
 * Nie wymaga zewnętrznych zależności poza React
 */

"use client"

import React, { useEffect, useRef, useState } from "react"

const Cursor = () => {
    const promien = 20
    const promienHover = 0
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mousePos = useRef({ x: 100, y: 100 })
    const lastPos = useRef({ x: 100, y: 100 })
    const radiusRef = useRef(promien) // Aktualny promień kursora
    const targetRadius = useRef(promien) // Docelowy promień kursora

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current.x = e.clientX
            mousePos.current.y = e.clientY
        }

        const updateCursorPosition = () => {
            requestAnimationFrame(updateCursorPosition)
        }

        document.addEventListener("mousemove", handleMouseMove)
        updateCursorPosition()

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    useEffect(() => {
        const initCanvas = () => {
            const canvas = canvasRef.current
            if (!canvas) return
            const ctx = canvas.getContext("2d")
            if (!ctx) return

            // Skalowanie płótna dla ostrości
            const scale = window.devicePixelRatio || 1
            canvas.width = window.innerWidth * scale
            canvas.height = window.innerHeight * scale
            canvas.style.width = `${window.innerWidth}px`
            canvas.style.height = `${window.innerHeight}px`
            ctx.scale(scale, scale)

            // Funkcja interpolacji (lerping)
            const lerp = (a: number, b: number, n: number) =>
                (1 - n) * a + n * b

            const render = () => {
                // Interpolacja dla płynnego ruchu kursora
                lastPos.current.x = lerp(
                    lastPos.current.x,
                    mousePos.current.x,
                    0.11
                )
                lastPos.current.y = lerp(
                    lastPos.current.y,
                    mousePos.current.y,
                    0.11
                )

                // Interpolacja dla płynnej zmiany rozmiaru
                radiusRef.current = lerp(
                    radiusRef.current,
                    targetRadius.current,
                    0.2
                )

                // Czyszczenie płótna
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                // Rysowanie kursora
                ctx.beginPath()
                ctx.arc(
                    lastPos.current.x,
                    lastPos.current.y,
                    radiusRef.current,
                    0,
                    Math.PI * 2
                )
                ctx.strokeStyle = "rgba(255, 255, 255, .2)"
                ctx.lineWidth = 1
                ctx.stroke()
                ctx.closePath()

                requestAnimationFrame(render)
            }
            requestAnimationFrame(render)
        }

        initCanvas()
    }, [])

    useEffect(() => {
        // Obsługa zdarzeń `mouseenter` i `mouseleave` dla interaktywnych elementów
        const handleMouseEnter = () => {
            targetRadius.current = promienHover // Docelowy promień, gdy nad interaktywnym elementem
        }
        const handleMouseLeave = () => {
            targetRadius.current = promien // Powrót do domyślnego promienia
        }

        const interactiveElements = document.querySelectorAll("a, button") // Dodaj tu inne selektory w razie potrzeby
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter)
            el.addEventListener("mouseleave", handleMouseLeave)
        })

        return () => {
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter)
                el.removeEventListener("mouseleave", handleMouseLeave)
            })
        }
    }, [])

    return (
        <>
            {/* Canvas do efektów */}
            <canvas
                ref={canvasRef}
                className="cursorCanvas hidden-xs"
            />
        </>
    )
}

export default Cursor
