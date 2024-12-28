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
import { WalletContextType, WalletType } from "@/types/web3"

const WalletContext = createContext<WalletContextType | null>(null)

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [address, setAddress] = useState<string | null>(null)
    const [walletType, setWalletType] = useState<
        "metamask" | "coinbase" | null
    >(null)
    // const [walletClient, setWalletClient] = useState<WalletClient | null>(null)
    const [isConnecting, setIsConnecting] = useState(false)
    const { navigateTo } = useWeb3Modal()

    useEffect(() => {
        const savedAddress = localStorage.getItem("walletAddress")
        const savedType = localStorage.getItem("walletType") as
            | "metamask"
            | "coinbase"
            | null

        if (savedAddress && savedType) {
            setAddress(savedAddress)
            setWalletType(savedType)
        }
    }, [])

    const connect = async (type: WalletType) => {
        const provider = window.ethereum?.providers
            ? window.ethereum.providers.find((p: any) => p.isMetaMask)
            : window.ethereum

        if (!provider) return { success: false, error: "no-client" }

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

            return { success: true }
        } catch (error) {
            console.error("Connection error:", error)

            if (error.code === 4001) {
                return { success: false, error: "cancelled" }
            }

            return { success: false, error: "connection-failed" }
        } finally {
            setIsConnecting(false)
        }
    }

    const disconnect = () => {
        setAddress(null)
        setWalletType(null)
        // setWalletClient(null)
        localStorage.removeItem("walletAddress")
        localStorage.removeItem("walletType")

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
