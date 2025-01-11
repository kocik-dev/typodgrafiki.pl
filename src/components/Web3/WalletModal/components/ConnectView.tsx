"use client"

import { useAccount, useConnect } from "wagmi"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import Image from "next/image"
import iconMetamask from "@/assets/web3/wallets/metamask.svg"
import iconCoinbase from "@/assets/web3/wallets/coinbase.svg"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

export const ConnectView = () => {
    const { isConnecting, address } = useAccount()
    const { connectors, connect } = useConnect()
    const [lastUsedWallet, setLastUsedWallet] = useState(() =>
        localStorage.getItem("lastUsedWallet")
    )
    const { navigateTo } = useWeb3Modal()
    const t = useTranslations("web3")

    // Filtruje portfele aby wyswietlic tylko 2
    const filteredConnectors = connectors.filter((connector) =>
        ["MetaMask", "Coinbase Wallet"].includes(connector.name)
    )

    const getWalletIcon = (connectorName: string) => {
        switch (connectorName.toLowerCase()) {
            case "metamask":
                return iconMetamask
            case "coinbase wallet":
                return iconCoinbase
            default:
                return iconMetamask
        }
    }

    const handleConnect = async (connector: any) => {
        try {
            // Sprawdzamy czy portfel jest zainstalowany
            if (connector.name === "MetaMask" && !window.ethereum?.isMetaMask) {
                // Własna akcja dla niezainstalowanego MetaMask
                navigateTo("installMetamask")
                return
            }

            if (
                connector.name === "Coinbase Wallet" &&
                !window.ethereum?.isCoinbaseWallet
            ) {
                // Własna akcja dla niezainstalowanego Coinbase Wallet
                navigateTo("installCoinbase")
                return
            }

            // Zapisz informację o wybranym portfelu
            localStorage.setItem("lastUsedWallet", connector.name)
            setLastUsedWallet(connector.name)

            // Jeśli portfel jest zainstalowany, próbujemy się połączyć
            await connect({ connector })
        } catch (err) {
            console.error("Connection error:", err)
            // Tutaj możesz dodać własną obsługę błędów
        }
    }

    useEffect(() => {
        if (address) {
            navigateTo("success")
        }
    }, [address])

    if (isConnecting) {
        return (
            <div className="flex flex-column vertical-center text-center">
                <ImageMetamaskBig />
                <p className="modal-title">{t("modalRequestTitle")}</p>
                <p className="text">{t("modalRequestText")}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-column gap-1">
            {filteredConnectors.map((connector) => (
                <button
                    key={connector.uid}
                    className="flex vertical-center justify-between btn btn-transparent btn-wallet-connect btn-bubble-bottom"
                    // onClick={() => connect({ connector })}
                    onClick={() => handleConnect(connector)}
                    disabled={isConnecting}
                >
                    <span style={{ width: "inherit" }}>
                        <span>
                            <span>{connector.name}</span>
                            {lastUsedWallet === connector.name && (
                                <small style={styles.small}>
                                    ({t("modalRequestRecent")})
                                </small>
                            )}
                        </span>
                        <Image
                            // src={iconMetamask}
                            src={getWalletIcon(connector.name)}
                            alt={connector.name}
                            width={32}
                            height={32}
                        />
                    </span>
                </button>
            ))}
        </div>
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

const styles = {
    small: {
        color: "gray",
        marginLeft: "8px",
    },
}
