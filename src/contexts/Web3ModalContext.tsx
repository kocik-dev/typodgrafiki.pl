"use client"

import { createContext, useContext, useCallback, useState } from "react"
import { ModalView, WalletConnectMessageType } from "@/types/web3"

interface Web3ModalContextType {
    isOpen: boolean
    view: ModalView
    open: (view?: ModalView) => void
    close: () => void
    navigateTo: (view: ModalView) => void
    goBack: () => void
    canGoBack: boolean
    title: string
}

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
    const [history, setHistory] = useState<ModalView[]>([])
    const [errorMessage, setErrorMessage] =
        useState<WalletConnectMessageType | null>(null)

    const open = useCallback((initialView: ModalView = "connect") => {
        setView(initialView)
        setIsOpen(true)
    }, [])

    const close = useCallback(() => {
        setIsOpen(false)
        setHistory([])
        setView("connect")
    }, [])

    const navigateTo = useCallback(
        (newView: ModalView, errorMessage?: WalletConnectMessageType) => {
            if (newView === "error" && errorMessage) {
                setErrorMessage(errorMessage) // Ustaw wiadomość błędu
            }
            setHistory((prev) => [...prev, view])
            setView(newView)
        },
        [view]
    )

    const goBack = useCallback(() => {
        const previousView = history[history.length - 1]
        if (previousView) {
            setView(previousView)
            setHistory((prev) => prev.slice(0, -1))
        } else {
            close()
        }
    }, [history, close])

    const title = (() => {
        switch (view) {
            case "connect":
                return "Connect Wallet"
            case "install":
                return "Metamask"
            case "success":
                return "Connected"
            case "error":
                return "Metamask"
        }
    })()

    const value = {
        isOpen,
        view,
        open,
        close,
        navigateTo,
        goBack,
        canGoBack: history.length > 0,
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
