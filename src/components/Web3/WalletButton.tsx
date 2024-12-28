"use client"

import React from "react"
import { useWallet } from "@/contexts/WalletContext"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import { formatWalletAddress } from "@/lib/web3"
import { useTranslations } from "next-intl"

export const WalletButton = () => {
    const { address } = useWallet()
    const { open } = useWeb3Modal()

    const t = useTranslations("web3")

    const handleClick = () => {
        open(address ? "success" : "connect")
    }

    return (
        <div className="menu-web3 relative">
            <button className="btn btn-default" onClick={handleClick}>
                {address ? formatWalletAddress(address) : t("btnConnectWeb3")}
            </button>
        </div>
    )
}
