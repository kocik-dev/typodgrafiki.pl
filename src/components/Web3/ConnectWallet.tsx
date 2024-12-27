"use client"

import React, { useState } from "react"
import { useTranslations } from "next-intl"
import { useModal } from "@/hooks/useModalContext"
import { WalletContent } from "./ModalWalletConnect"

export default function ConnectWallet() {
    const t = useTranslations("web3")

    const [walletAddress, setWalletAddress] = useState<null | string>(null)

    const { openModal } = useModal()

    const handleOpenModal = () => {
        openModal({
            title: "Connect Wallet",
            content: <WalletContent />,
        })
    }

    return (
        <div className="menu-web3 relative">
            <button className="btn btn-default" onClick={handleOpenModal}>
                {walletAddress ? t("btnWeb3Connected") : t("btnConnectWeb3")}
            </button>
        </div>
    )
}
