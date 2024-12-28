"use client"

import { useWallet } from "@/contexts/WalletContext"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import Image from "next/image"
import iconMetamask from "@/assets/web3/wallets/metamask.svg"
import { useState } from "react"

declare global {
    interface Window {
        ethereum: any
    }
}

export const ConnectView = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const { connect, isConnecting } = useWallet()
    const { navigateTo } = useWeb3Modal()

    const handleMetamaskConnect = async () => {
        setIsCancelled(false)
        if (!window.ethereum?.providers && !window.ethereum?.isMetaMask) {
            navigateTo("install")
            return
        }
        const result = await connect("metamask")
        if (result.success) {
            navigateTo("disconnect")
        } else if (result.error === "cancelled") {
            setIsCancelled(true)
        }
    }

    if (isCancelled) {
        return (
            <div className="flex flex-column vertical-center">
                <Image
                    src={iconMetamask}
                    alt="Metamask"
                    width={70}
                    height={70}
                    style={{ marginBottom: "10px" }}
                />
                <p className="modal-title">Request Cancelled</p>
                <p className="text">You cancelled the request.</p>
                <button
                    className="btn btn-transparent"
                    onClick={handleMetamaskConnect}
                >
                    Try again
                </button>
            </div>
        )
    }

    if (isConnecting) {
        return (
            <div className="text-center">
                <Image
                    src={iconMetamask}
                    alt="Metamask"
                    width={70}
                    height={70}
                    style={{ marginBottom: "10px" }}
                />
                <p className="modal-title">Requesting Connection</p>
                <p className="text">
                    Open the MetaMask browser extension to connect your wallet.
                </p>
            </div>
        )
    }

    return (
        <div>
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
        </div>
    )
}
