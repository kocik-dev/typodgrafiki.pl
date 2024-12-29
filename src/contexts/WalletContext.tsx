"use client"

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react"
import { createWalletClient, custom } from "viem"
import { mainnet } from "viem/chains"
import { useWeb3Modal } from "./Web3ModalContext"
import { WalletContextType, WalletTypeProps } from "@/types/web3"

declare global {
    interface Window {
        ethereum?: {
            providers?: any[]
            request: (args: any) => Promise<any>
        }
    }
}

const WalletContext = createContext<WalletContextType | null>(null)

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [address, setAddress] = useState<string | null>(null)
    const [walletType, setWalletType] = useState<WalletTypeProps | null>(null)
    const [isConnecting, setIsConnecting] = useState(false)
    const { navigateTo } = useWeb3Modal()

    useEffect(() => {
        const savedAddress = localStorage.getItem("walletAddress")
        const savedType = localStorage.getItem(
            "walletType"
        ) as WalletTypeProps | null

        if (savedAddress && savedType) {
            setAddress(savedAddress)
            setWalletType(savedType)
        }
    }, [])

    const connect = async (type: WalletTypeProps) => {
        const provider = window.ethereum?.providers
            ? window.ethereum.providers.find((p: any) => p.isMetaMask)
            : window.ethereum

        if (!provider) {
            return {
                success: false,
                error: "no-client",
                message: {
                    title: "No Wallet Detected",
                    text: "We couldn't detect a wallet. Please install MetaMask or another compatible wallet.",
                },
            }
        }

        setIsConnecting(true)
        try {
            await provider.request({ method: "eth_requestAccounts" })

            const client = createWalletClient({
                chain: mainnet,
                transport: custom(provider),
            })

            const [address] = await client.getAddresses()

            setAddress(address)
            setWalletType(type)

            localStorage.setItem("walletAddress", address)
            localStorage.setItem("walletType", type)

            return {
                success: true,
                message: {
                    title: "Connected Successfully",
                    text: "Your wallet is now connected. You can proceed with your transactions.",
                },
            }
        } catch (error: any) {
            // console.error("Connection error:", error)

            // Obsługa różnych kodów błędów
            if (error.code === 4001) {
                return {
                    success: false,
                    error: "cancelled",
                    message: {
                        title: "Connection Cancelled",
                        text: "You cancelled the connection request. Please try again if you wish to connect.",
                        btn: true,
                    },
                }
            } else if (error.code === -32002) {
                return {
                    success: false,
                    error: "request-pending",
                    message: {
                        title: "Request Pending",
                        text: "A connection request is already pending. Please check your wallet or try again later.",
                    },
                }
            } else if (error.code === 4900) {
                return {
                    success: false,
                    error: "disconnected",
                    message: {
                        title: "Provider Disconnected",
                        text: "The wallet provider is disconnected. Please reconnect your wallet and try again.",
                        btn: true,
                    },
                }
            } else if (error.code === 4901) {
                return {
                    success: false,
                    error: "chain-disconnected",
                    message: {
                        title: "Chain Disconnected",
                        text: "Your wallet is not connected to a supported chain. Please switch networks and try again.",
                        btn: true,
                    },
                }
            } else if (error.code === -32601) {
                return {
                    success: false,
                    error: "method-not-found",
                    message: {
                        title: "Unsupported Method",
                        text: "The requested method is not supported by your wallet. Please check your setup and try again.",
                        btn: true,
                    },
                }
            } else if (error.code === -32602) {
                return {
                    success: false,
                    error: "invalid-parameters",
                    message: {
                        title: "Invalid Parameters",
                        text: "The connection request contained invalid parameters. Please try again.",
                        btn: true,
                    },
                }
            } else if (error.code === -32005) {
                return {
                    success: false,
                    error: "resource-unavailable",
                    message: {
                        title: "Resource Unavailable",
                        text: "The wallet provider is currently unavailable. Please try again later.",
                        btn: true,
                    },
                }
            }

            return {
                success: false,
                error: "connection-failed",
                message: {
                    title: "Connection Failed",
                    text: "An unknown error occurred while trying to connect your wallet. Please try again.",
                    btn: true,
                },
            }
        } finally {
            setIsConnecting(false)
        }
    }

    const disconnect = () => {
        setAddress(null)
        // setWalletType(null)
        // setWalletClient(null)
        localStorage.removeItem("walletAddress")
        // localStorage.removeItem("walletType")

        navigateTo("connect")
    }

    return (
        <WalletContext.Provider
            value={{
                address,
                walletType,
                // walletClient,
                isConnecting,
                connect,
                disconnect,
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}

export const useWallet = () => {
    const context = useContext(WalletContext)
    if (!context) {
        throw new Error("useWallet must be used within WalletProvider")
    }
    return context
}
