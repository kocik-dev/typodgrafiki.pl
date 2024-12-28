"use client"

import { useWallet } from "@/contexts/WalletContext"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import Image from "next/image"
import iconMetamask from "@/assets/web3/wallets/metamask.svg"

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
            navigateTo("disconnect")
        }
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
                    {isConnecting && "Connecting..."}
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
