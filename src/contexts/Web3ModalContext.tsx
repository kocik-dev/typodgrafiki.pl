"use client"

import { createContext, useContext, useCallback, useState } from "react"
import {
    ModalView,
    WalletConnectMessageType,
    Web3ModalContextType,
} from "@/types/web3"

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
    const [errorMessage, setErrorMessage] =
        useState<WalletConnectMessageType | null>(null)

    const canGoBack =
        view === "installMetamask" ||
        view === "installCoinbase" ||
        view === "error"

    const open = useCallback((initialView: ModalView = "connect") => {
        setView(initialView)
        setIsOpen(true)
    }, [])

    const close = useCallback(() => {
        setIsOpen(false)
        setView("connect")
    }, [])

    const navigateTo = useCallback(
        (newView: ModalView, errorMessage?: WalletConnectMessageType) => {
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
            case "installMetamask":
                return "Metamask"
            case "installCoinbase":
                return "Coinbase Wallet"
            case "success":
                return "Connected"
            case "error":
                return "Metamask"
            case "disconnected":
                return "Disconnected"
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
