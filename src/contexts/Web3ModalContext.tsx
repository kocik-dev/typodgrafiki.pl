"use client"

import { createContext, useContext, useCallback, useState } from "react"
import { ModalView, Web3ModalContextType } from "@/types/web3"

const Web3ModalContext = createContext<Web3ModalContextType | undefined>(
    undefined
)

export const Web3ModalProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [view, setView] = useState<ModalView>("connect")
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const canGoBack = view === "install" || view === "error" || view === "mint"

    const open = useCallback((initialView: ModalView = "connect") => {
        setView(initialView)
        setIsOpen(true)
    }, [])

    const close = useCallback(() => {
        setIsOpen(false)
        setView("connect")
    }, [])

    const navigateTo = useCallback(
        (newView: ModalView, errorMessage?: string) => {
            if (newView === "error" && errorMessage) {
                setErrorMessage(errorMessage)
            }
            setView(newView)
        },
        [view]
    )

    const title = (() => {
        switch (view) {
            case "connect":
                return "Connect Wallet"
            case "install":
                return "Metamask"
            case "success":
                return "Connected"
            case "mint":
                return "Mint free NFT"
            case "error":
                return "Metamask"
        }
    })()

    const value = {
        isOpen,
        view,
        open,
        close,
        canGoBack,
        navigateTo,
        title,
        errorMessage,
    }

    return (
        <Web3ModalContext.Provider value={value}>
            {children}
        </Web3ModalContext.Provider>
    )
}

export const useWeb3Modal = () => {
    const context = useContext(Web3ModalContext)
    if (!context) {
        throw new Error("useWeb3Modal must be used within Web3ModalProvider")
    }
    return context
}
