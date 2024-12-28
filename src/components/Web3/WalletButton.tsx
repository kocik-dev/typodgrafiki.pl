"use client"

import React from "react"
import { useWallet } from "@/contexts/WalletContext"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import { formatWalletAddress } from "@/lib/web3"
import { useTranslations } from "next-intl"

// import React, { useEffect, useState } from "react"
// import { useTranslations } from "next-intl"
// import { useModal, useWallet } from "@/hooks/---useContext"
// import { WalletContent } from "./WalletModal/---ModalWalletConnect"
// import { formatWalletAddress } from "@/lib/web3"

// export default function ConnectWallet() {
//     const t = useTranslations("web3")

//     // const [walletAddress, setWalletAddress] = useState<null | string>(null)

//     const { openModal } = useModal()
//     const { address, isConnected, setWalletAddress } = useWallet()

//     const handleOpenModal = () => {
//         openModal({
//             title: "Connect Wallet",
//             content: <WalletContent />,
//         })
//     }

//     useEffect(() => {
//         const result =
//             isConnected && address ? formatWalletAddress(address) : null
//         if (result) {
//             setWalletAddress(result)
//         } else {
//             setWalletAddress(null)
//         }
//     }, [isConnected, address])

//     return (
//         <div className="menu-web3 relative">
//             <button className="btn btn-default" onClick={handleOpenModal}>
//                 {address ? address : t("btnConnectWeb3")}
//             </button>
//         </div>
//     )
// }

// components/Web3/WalletButton.tsx
export const WalletButton = () => {
    const { address, isConnected } = useWallet()
    const { open } = useWeb3Modal()

    const t = useTranslations("web3")

    const handleClick = () => {
        open(isConnected ? "disconnect" : "connect")
    }

    return (
        <div className="menu-web3 relative">
            <button className="btn btn-default" onClick={handleClick}>
                {address ? formatWalletAddress(address) : t("btnConnectWeb3")}
            </button>
        </div>
    )
}
