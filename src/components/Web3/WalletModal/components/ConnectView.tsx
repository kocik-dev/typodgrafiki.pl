"use client"

import { useWallet } from "@/contexts/WalletContext"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import Image from "next/image"
import iconMetamask from "@/assets/web3/wallets/metamask.svg"
import { useState } from "react"
import { WalletConnectMessageType } from "@/types/web3"

declare global {
    interface Window {
        ethereum: any
    }
}

export const ConnectView = () => {
    const { connect, isConnecting } = useWallet()
    const { navigateTo } = useWeb3Modal()

    const handleMetamaskConnect = async () => {
        if (!window.ethereum?.providers && !window.ethereum?.isMetaMask) {
            navigateTo("install")
            return
        }
        const result = await connect("metamask")
        if (result.success) {
            navigateTo("success")
        } else {
            navigateTo("error", result.message)
        }
    }

    if (isConnecting) {
        return (
            <div className="flex flex-column vertical-center text-center">
                <ImageMetamaskBig />
                <p className="modal-title">Requesting Connection</p>
                <p className="text">
                    Open the MetaMask browser extension to connect your wallet.
                </p>
            </div>
        )
    }

    return (
        <button
            className="flex vertical-center justify-between btn btn-transparent btn-wallet-connect btn-bubble-bottom"
            onClick={handleMetamaskConnect}
            disabled={isConnecting}
        >
            <span style={{ width: "inherit" }}>
                MetaMask
                <Image
                    src={iconMetamask}
                    alt="Metamask"
                    width={32}
                    height={32}
                />
            </span>
        </button>
    )
}

export const ImageMetamaskBig = () => {
    return (
        <Image
            src={iconMetamask}
            alt="Metamask"
            width={70}
            height={70}
            style={{ marginBottom: "10px" }}
        />
    )
}
