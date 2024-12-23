// "use client"

// import React, { useEffect, useState } from "react"
// import { useTranslations } from "next-intl"
// import { createWalletClient, custom } from "viem"
// import { mainnet } from "viem/chains"

// declare global {
//     interface Window {
//         ethereum: any
//     }
// }

// export default function ConnectWallet() {
//     const t = useTranslations("menu")

//     const [isWalletInstalled, setIsWalletInstalled] = useState(false)
//     const [walletAddress, setWalletAddress] = useState<null | string>(null)
//     const [errorMessage, setErrorMessage] = useState<null | string>(null)

//     const connectWallet = async () => {
//         if (isWalletInstalled) {
//             try {
//                 const client = createWalletClient({
//                     chain: mainnet,
//                     transport: custom(window.ethereum),
//                 })

//                 const [account] = await client.requestAddresses()
//                 setWalletAddress(account)
//                 setErrorMessage(null)

//                 //TODO: Pokaż modal i zaproponuj mint
//                 //TODO: Poprawic dzialanie ogolnie
//             } catch (error) {
//                 console.error("Error connecting wallet:", error)
//                 setErrorMessage("Failed to connect wallet.")
//             }
//         } else {
//             setErrorMessage(
//                 "MetaMask is not installed. Please install it to connect your wallet."
//             )
//         }
//     }

//     useEffect(() => {
//         if (typeof window.ethereum !== "undefined") {
//             setIsWalletInstalled(true)
//         }
//     }, [])

//     return (
//         <div className="menu-web3 relative">
//             <button
//                 className="btn btn-default relative"
//                 disabled={!isWalletInstalled}
//                 onClick={connectWallet}
//             >
//                 {walletAddress ? t("btnWeb3Connected") : t("btnConnectWeb3")}
//             </button>
//             {!isWalletInstalled ? (
//                 <div className="tooltip">
//                     Zainstaluj portfel WEB3 aby połączyć.
//                 </div>
//             ) : null}
//         </div>
//     )
// }

// function formatWalletAddress(address: string) {
//     if (!address || address.length < 10) {
//         return "Invalid address"
//     }
//     return `${address.slice(0, 6)}...${address.slice(-4)}`
// }

"use client"

import React, { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"

const WalletConnect = dynamic(() => import("./WalletConnect"), {
    loading: () => <button className="btn btn-default">Loading...</button>,
    ssr: false,
})

declare global {
    interface Window {
        ethereum: any
    }
}

export default function ConnectWallet() {
    const t = useTranslations("web3")
    const [isWalletInstalled, setIsWalletInstalled] = useState(false)

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setIsWalletInstalled(true)
        }
    }, [])

    return (
        <div className="menu-web3 relative">
            {isWalletInstalled ? (
                <WalletConnect t={t} />
            ) : (
                <>
                    <button
                        className="btn btn-default relative"
                        onClick={() =>
                            window.open(
                                "https://metamask.io/download/",
                                "_blank"
                            )
                        }
                    >
                        {t("installWeb3")}
                    </button>
                    <div className="tooltip">
                        Zainstaluj portfel WEB3 aby połączyć.
                    </div>
                </>
            )}
        </div>
    )
}
