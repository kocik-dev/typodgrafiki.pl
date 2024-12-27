import { useState } from "react"
import Image from "next/image"
import iconMetamask from "@/assets/web3/wallets/metamask.svg"
import iconCoinbase from "@/assets/web3/wallets/coinbase.svg"
import { useModal } from "@/hooks/useModalContext"
import { createWalletClient, custom } from "viem"
import { mainnet } from "viem/chains"
import Link from "next/link"

interface WalletNotInstalledProps {
    walletName: string
    installUrl: string
}

function WalletNotInstalled({
    walletName,
    installUrl,
}: WalletNotInstalledProps) {
    return (
        <div className="text-center">
            <h4>Install {walletName}</h4>
            <p className="text">
                To connect your {walletName} wallet, install the browser
                extension.
            </p>
            <Link
                href={installUrl}
                target="_blank"
                className="btn btn-transparent btn-bubble-bottom"
            >
                <span>Install the Extension</span>
            </Link>
        </div>
    )
}

export function WalletContent() {
    const { openModal } = useModal()

    const connectMetamask = async () => {
        if (!window.ethereum?.providers && !window.ethereum?.isMetaMask) {
            openModal({
                title: "Install MetaMask",
                content: (
                    <WalletNotInstalled
                        walletName="MetaMask"
                        installUrl="https://metamask.io/download/"
                    />
                ),
            })
            return
        }

        try {
            // Znajdź provider MetaMaska
            const provider = window.ethereum?.providers
                ? window.ethereum.providers.find((p: any) => p.isMetaMask)
                : window.ethereum

            const client = createWalletClient({
                chain: mainnet,
                transport: custom(provider),
            })
            const [account] = await client.requestAddresses()
            // Handle successful connection
        } catch (error) {
            console.error(error)
        }
    }

    const connectCoinbase = async () => {
        if (typeof window.ethereum?.isCoinbaseWallet === "undefined") {
            openModal({
                title: "Install Coinbase Wallet",
                content: (
                    <WalletNotInstalled
                        walletName="Coinbase Wallet"
                        installUrl="https://www.coinbase.com/wallet"
                    />
                ),
            })
            return
        }

        // Similar connection logic as MetaMask
    }

    return (
        <>
            <button
                className="btn flex vertical-center justify-between"
                onClick={connectMetamask}
            >
                MetaMask
                <Image
                    src={iconMetamask}
                    alt="Metamask"
                    width={32}
                    height={32}
                />
            </button>
            <button
                className="btn flex vertical-center justify-between"
                onClick={connectCoinbase}
            >
                Coinbase Wallet
                <Image
                    src={iconCoinbase}
                    alt="Coinbase Wallet"
                    width={32}
                    height={32}
                    style={{ borderRadius: "6px" }}
                />
            </button>
        </>
    )
}
