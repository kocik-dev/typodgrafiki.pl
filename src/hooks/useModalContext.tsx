"use client"

import { ModalProps } from "@/types/types"
import { useState, useCallback, useContext, createContext } from "react"

interface ModalContextType {
    isOpen: boolean
    modalContent: ModalProps | null
    openModal: (content: ModalProps) => void
    closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState<ModalProps | null>(null)

    const openModal = useCallback((content: ModalProps) => {
        setModalContent(content)
        setIsOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsOpen(false)
        setModalContent(null)
    }, [])

    return (
        <ModalContext.Provider
            value={{ isOpen, modalContent, openModal, closeModal }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider")
    }
    return context
}
