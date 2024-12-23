"use client"

import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
    const modalRoot = useRef<Element | null>(null)
    const modalContent = useRef<HTMLDivElement>(null)

    useEffect(() => {
        modalRoot.current =
            document.getElementById("modal-root") || document.body

        // Zamykanie modalu po kliknięciu poza nim
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalContent.current &&
                !modalContent.current.contains(event.target as Node)
            ) {
                onClose()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        // Blokowanie scrollowania body
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.body.style.overflow = "unset"
        }
    }, [onClose])

    const modal = (
        <div className="modal">
            <div ref={modalContent}>
                <button
                    onClick={onClose}
                    className=""
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    )

    return modalRoot.current ? createPortal(modal, modalRoot.current) : null
}
