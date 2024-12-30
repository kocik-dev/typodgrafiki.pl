"use client"

import React from "react"
import { ImageMetamaskBig } from "./ConnectView"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import { useTranslations } from "next-intl"

export default function ErrorView() {
    const { errorMessage, navigateTo } = useWeb3Modal()
    const t = useTranslations("web3")

    if (!errorMessage) {
        return null // Nie wyświetlaj niczego, jeśli brak wiadomości błędu
    }

    return (
        <div className="flex flex-column vertical-center text-center">
            <ImageMetamaskBig />
            <p className="modal-title">{errorMessage.title}</p>
            <p className="text">{errorMessage.text}</p>
            {errorMessage.btn && (
                <button
                    className="btn btn-transparent"
                    onClick={() => navigateTo("connect")} // Powrót do widoku connect
                >
                    {t("btnTryAgain")}
                </button>
            )}
        </div>
    )
}
