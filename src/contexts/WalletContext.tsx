// // contexts/WalletContext.tsx
// "use client"
// import { getWalletClient } from "@/hooks/useWalletClient"
// import {
//     createContext,
//     useContext,
//     useState,
//     useCallback,
//     useEffect,
// } from "react"

// interface WalletContextType {
//     address: string | null
//     isConnected: boolean
//     connect: (
//         type: "metamask" | "coinbase"
//     ) => Promise<{ success: boolean; error?: string }>
//     disconnect: () => void
// }

// const WalletContext = createContext<WalletContextType | undefined>(undefined)

// export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
//     const [address, setAddress] = useState<string | null>(null)

//     // const connect = useCallback(async (type: "metamask" | "coinbase") => {
//     //     if (type === "metamask") {
//     //         try {
//     //             const provider = window.ethereum?.providers
//     //                 ? window.ethereum.providers.find((p: any) => p.isMetaMask)
//     //                 : window.ethereum

//     //             const client = createWalletClient({
//     //                 chain: mainnet,
//     //                 transport: custom(provider),
//     //             })

//     //             const [account] = await client.requestAddresses()

//     //             setAddress(account)
//     //             return { success: true }
//     //         } catch (error) {
//     //             console.error("Metamask connection error:", error)
//     //             return { success: false, error: "connection-failed" }
//     //         }
//     //     }
//     //     if (type === "coinbase") {
//     //         //TODO: Obsluz coinbase
//     //     }

//     //     return { success: false, error: "unsupported-wallet" }
//     // }, [])

//     const connect = useCallback(async (type: "metamask" | "coinbase") => {
//         const client = await getWalletClient()

//         if (!client) return { success: false, error: "connection-failed" }

//         try {
//             const [address] = await client.getAddresses()
//             setAddress(address)
//             return { success: true }
//         } catch (error) {
//             console.error("Connection error:", error)
//             return { success: false, error: "connection-failed" }
//         }
//     }, [])

//     const disconnect = useCallback(() => {
//         setAddress(null)
//     }, [])

//     // Sprawdź połączenie przy starcie
//     useEffect(() => {
//         const checkConnection = async () => {
//             const client = await getWalletClient()
//             if (client) {
//                 try {
//                     const [account] = await client.requestAddresses()
//                     if (account) setAddress(account)
//                 } catch (error) {
//                     console.error("Error checking connection:", error)
//                 }
//             }
//         }
//         checkConnection()
//     }, [])

//     // Nasłuchuj na zmiany konta
//     // useEffect(() => {
//     //     const setupWalletListener = async () => {
//     //         const client = await getWalletClient()
//     //         if (!client) return

//     //         client.on("change", { account: true }, (accounts) => {
//     //             setAddress(accounts[0] || null)
//     //         })

//     //         return () => {
//     //             client.removeAllListeners()
//     //         }
//     //     }

//     //     setupWalletListener()
//     // }, [])

//     return (
//         <WalletContext.Provider
//             value={{
//                 address,
//                 isConnected: !!address,
//                 connect,
//                 disconnect,
//             }}
//         >
//             {children}
//         </WalletContext.Provider>
//     )
// }

// export const useWallet = () => {
//     const context = useContext(WalletContext)
//     if (!context)
//         throw new Error("useWallet must be used within WalletProvider")
//     return context
// }

// contexts/WalletContext.tsx
"use client"

import { getWalletClient } from "@/hooks/---useWalletClient"
import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
} from "react"
import { WalletContextType, WalletType } from "@/types/web3"

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
    const [address, setAddress] = useState<string | null>(
        () => localStorage.getItem("walletAddress") || null // Inicjalizuj ze stanu Local Storage
    )

    const [walletType, setWalletType] = useState<WalletType | null>(
        () => (localStorage.getItem("walletType") as WalletType) || null
    )

    const connect = useCallback(async (type: WalletType) => {
        const client = await getWalletClient()
        if (!client) return { success: false, error: "no-client" }

        try {
            const [walletAddress] = await client.getAddresses()
            setAddress(walletAddress)
            setWalletType(type)

            // Zapisz adres w Local Storage
            localStorage.setItem("walletAddress", walletAddress)
            localStorage.setItem("walletType", type)

            return { success: true }
        } catch (error) {
            console.error("Connection error:", error)
            return { success: false, error: "connection-failed" }
        }
    }, [])

    const disconnect = useCallback(() => {
        setAddress(null)

        // Usuń adres z Local Storage
        localStorage.removeItem("walletAddress")
    }, [])

    // Przy starcie aplikacji sprawdź, czy jest zapisane połączenie
    useEffect(() => {
        const checkConnection = async () => {
            const client = await getWalletClient()
            if (!client) return

            const storedAddress = localStorage.getItem("walletAddress")
            if (storedAddress) {
                try {
                    // Zweryfikuj, czy zapisany adres jest nadal aktywny
                    const [account] = await client.getAddresses()
                    if (account === storedAddress) {
                        setAddress(account)
                    } else {
                        disconnect() // Usuń nieaktualny adres
                    }
                } catch (error) {
                    console.error("Error checking connection:", error)
                    disconnect()
                }
            }
        }

        checkConnection()
    }, [disconnect])

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
