"use client"

import React, { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { ethers } from "ethers"

declare global {
    interface Window {
        ethereum: any
    }
}

export default function ConnectWallet() {
    const t = useTranslations("menu")

    const [isWalletInstalled, setIsWalletInstalled] = useState(false)
    const [walletAddress, setWalletAddress] = useState<null | string>(null)
    const [errorMessage, setErrorMessage] = useState<null | string>(null)

    const connectWallet = async () => {
        if (isWalletInstalled) {
            try {
                // Poproś użytkownika o połączenie portfela
                const provider = new ethers.BrowserProvider(window.ethereum)
                const accounts = await provider.send("eth_requestAccounts", [])
                const account = accounts[0]
                setWalletAddress(account)
                setErrorMessage(null)

                //TODO: Pokaż modal i zaproponuj mint
                //TODO: Poprawic dzialanie ogolnie
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

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setIsWalletInstalled(true)
        }
    }, [])

    return (
        <div className="menu-web3 relative">
            <button
                className="btn btn-default relative"
                disabled={!isWalletInstalled}
                onClick={connectWallet}
            >
                {walletAddress ? t("btnWeb3Connected") : t("btnConnectWeb3")}
            </button>
            {!isWalletInstalled ? (
                <div className="tooltip">
                    Zainstaluj portfel WEB3 aby połączyć.
                </div>
            ) : null}
            {/* {walletAddress && (
                <p style={{ marginTop: "10px" }}>
                    {formatWalletAddress(walletAddress)}
                </p>
            )}
            {errorMessage && (
                <p style={{ color: "red", marginTop: "10px" }}>
                    {errorMessage}
                </p>
            )} */}
        </div>
    )
}

function formatWalletAddress(address: string) {
    if (!address || address.length < 10) {
        return "Invalid address"
    }
    return `${address.slice(0, 6)}...${address.slice(-4)}`
}
