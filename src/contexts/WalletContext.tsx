// contexts/WalletContext.tsx
"use client"
import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
} from "react"
import { createWalletClient, custom } from "viem"
import { mainnet } from "viem/chains"

interface WalletContextType {
    address: string | null
    isConnected: boolean
    connect: (
        type: "metamask" | "coinbase"
    ) => Promise<{ success: boolean; error?: string }>
    disconnect: () => void
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
    const [address, setAddress] = useState<string | null>(null)

    const connect = useCallback(async (type: "metamask" | "coinbase") => {
        if (type === "metamask") {
            try {
                const provider = window.ethereum?.providers
                    ? window.ethereum.providers.find((p: any) => p.isMetaMask)
                    : window.ethereum

                const client = createWalletClient({
                    chain: mainnet,
                    transport: custom(provider),
                })

                const [account] = await client.requestAddresses()

                setAddress(account)
                return { success: true }
            } catch (error) {
                console.error("Metamask connection error:", error)
                return { success: false, error: "connection-failed" }
            }
        }
        if (type === "coinbase") {
            //TODO: Obsluz coinbase
        }

        return { success: false, error: "unsupported-wallet" }
    }, [])

    const disconnect = useCallback(() => {
        setAddress(null)
    }, [])

    // Sprawdź połączenie przy starcie
    useEffect(() => {
        const checkConnection = async () => {
            if (window.ethereum) {
                try {
                    const provider = window.ethereum?.providers
                        ? window.ethereum.providers.find(
                              (p: any) => p.isMetaMask
                          )
                        : window.ethereum

                    const client = createWalletClient({
                        chain: mainnet,
                        transport: custom(provider),
                    })

                    const [account] = await client.requestAddresses()
                    if (account) {
                        setAddress(account)
                    }
                } catch (error) {
                    console.error("Error checking connection:", error)
                }
            }
        }
        checkConnection()
    }, [])

    // Nasłuchuj na zmiany konta
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts: string[]) => {
                setAddress(accounts[0] || null)
            })
        }

        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener("accountsChanged", () => {})
            }
        }
    }, [])

    return (
        <WalletContext.Provider
            value={{
                address,
                isConnected: !!address,
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
    if (!context)
        throw new Error("useWallet must be used within WalletProvider")
    return context
}
