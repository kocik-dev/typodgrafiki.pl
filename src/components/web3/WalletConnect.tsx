"use client"

import React, { useState } from "react"
import {
    createWalletClient,
    custom,
    parseEther,
    encodeFunctionData,
    createPublicClient,
    http,
} from "viem"
import { mainnet } from "viem/chains"
import Modal from "../Modal"

// ABI dla kontraktu NFT (przykład dla ERC721)
const NFT_ABI = [
    {
        inputs: [],
        name: "mint",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "payable",
        type: "function",
    },
] as const

interface WalletInfo {
    name: string
    icon: string
    installed: boolean
    downloadUrl: string
}

const SUPPORTED_WALLETS: WalletInfo[] = [
    {
        name: "MetaMask",
        icon: "/metamask-icon.svg",
        installed:
            typeof window !== "undefined" && !!window.ethereum?.isMetaMask,
        downloadUrl: "https://metamask.io/download/",
    },
    {
        name: "Coinbase",
        icon: "/coinbase-icon.svg",
        installed:
            typeof window !== "undefined" &&
            !!window.ethereum?.isCoinbaseWallet,
        downloadUrl: "https://www.coinbase.com/wallet/downloads",
    },
]

const NFT_CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"
const MINT_PRICE = "0.08" // w ETH

export default function WalletConnect({ t }: { t: any }) {
    const [walletAddress, setWalletAddress] = useState<string | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isMinting, setIsMinting] = useState(false)
    const [mintSuccess, setMintSuccess] = useState(false)

    const connectWallet = async (provider: any) => {
        try {
            const client = createWalletClient({
                chain: mainnet,
                transport: custom(provider),
            })

            const [account] = await client.requestAddresses()
            setWalletAddress(account)
            setErrorMessage(null)
        } catch (error) {
            console.error("Error connecting wallet:", error)
            setErrorMessage("Failed to connect wallet.")
        }
    }

    const mintNFT = async () => {
        if (!walletAddress) return

        setIsMinting(true)
        setErrorMessage(null)

        try {
            const client = createWalletClient({
                chain: mainnet,
                transport: custom(window.ethereum),
            })

            // Przygotowanie danych transakcji
            const mintData = encodeFunctionData({
                abi: NFT_ABI,
                functionName: "mint",
            })

            // Wysłanie transakcji
            const hash = await client.sendTransaction({
                account: walletAddress,
                to: NFT_CONTRACT_ADDRESS,
                value: parseEther(MINT_PRICE),
                data: mintData,
            })

            // Czekamy na potwierdzenie
            const publicClient = createPublicClient({
                chain: mainnet,
                transport: http(),
            })

            await publicClient.waitForTransactionReceipt({ hash })

            setMintSuccess(true)
            setErrorMessage(null)
        } catch (error: any) {
            console.error("Error minting NFT:", error)
            setErrorMessage(error.message || "Failed to mint NFT.")
        } finally {
            setIsMinting(false)
        }
    }

    return (
        <>
            <button
                className="btn btn-default relative"
                onClick={() => setShowModal(true)}
            >
                {walletAddress ? t("btnWeb3Connected") : t("btnConnectWeb3")}{" "}
                {showModal ? "1" : "x"}
            </button>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {!walletAddress ? (
                        <div className="wallet-selection space-y-4">
                            <h2 className="text-xl font-bold mb-4">
                                Connect Wallet
                            </h2>
                            {SUPPORTED_WALLETS.map((wallet) => (
                                <div
                                    key={wallet.name}
                                    className="flex items-center justify-between p-4 border rounded-lg"
                                >
                                    <div className="flex items-center">
                                        <img
                                            src={wallet.icon}
                                            alt={wallet.name}
                                            className="w-8 h-8 mr-3"
                                        />
                                        <span>{wallet.name}</span>
                                    </div>
                                    {wallet.installed ? (
                                        <button
                                            onClick={() =>
                                                connectWallet(window.ethereum)
                                            }
                                            className="btn btn-primary"
                                        >
                                            Connect
                                        </button>
                                    ) : (
                                        <a
                                            href={wallet.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-secondary"
                                        >
                                            Install
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="mint-section space-y-4">
                            <h2 className="text-xl font-bold">Mint NFT</h2>
                            <p>
                                Connected:{" "}
                                {`${walletAddress.slice(
                                    0,
                                    6
                                )}...${walletAddress.slice(-4)}`}
                            </p>
                            <p>Price: {MINT_PRICE} ETH</p>

                            {mintSuccess ? (
                                <div className="success-message text-green-600">
                                    NFT successfully minted!
                                </div>
                            ) : (
                                <button
                                    onClick={mintNFT}
                                    disabled={isMinting}
                                    className="btn btn-primary w-full"
                                >
                                    {isMinting ? "Minting..." : "Mint NFT"}
                                </button>
                            )}

                            {errorMessage && (
                                <p className="text-red-500 mt-2">
                                    {errorMessage}
                                </p>
                            )}
                        </div>
                    )}
                </Modal>
            )}
        </>
    )
}
