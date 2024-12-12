"use client"

import React, { useState } from "react"
import { useTranslations } from "next-intl"
import { ethers } from "ethers"

declare global {
    interface Window {
        ethereum: any
    }
}

export default function ConnectWallet() {
    const t = useTranslations("menu")

    const [walletAddress, setWalletAddress] = useState<null | string>(null)
    const [errorMessage, setErrorMessage] = useState<null | string>(null)

    const connectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                // Poproś użytkownika o połączenie portfela
                const provider = new ethers.BrowserProvider(window.ethereum)
                const accounts = await provider.send("eth_requestAccounts", [])
                const account = accounts[0]
                setWalletAddress(account)
                setErrorMessage(null)
            } catch (error) {
                console.error("Error connecting wallet:", error)
                setErrorMessage("Failed to connect wallet.")
            }
        } else {
            setErrorMessage(
                "MetaMask is not installed. Please install it to connect your wallet."
            )
        }
    }

    return (
        <>
            <button
                className="btn btn-default"
                onClick={connectWallet}
            >
                {/* {t("wallet")} */}
                {walletAddress ? "Wallet Connected" : "Connect Wallet"}
            </button>
            {walletAddress && (
                <p style={{ marginTop: "10px" }}>
                    {formatWalletAddress(walletAddress)}
                </p>
            )}
            {errorMessage && (
                <p style={{ color: "red", marginTop: "10px" }}>
                    {errorMessage}
                </p>
            )}
        </>
    )
}

function formatWalletAddress(address: string) {
    if (!address || address.length < 10) {
        return "Invalid address"
    }
    return `${address.slice(0, 6)}...${address.slice(-4)}`
}
