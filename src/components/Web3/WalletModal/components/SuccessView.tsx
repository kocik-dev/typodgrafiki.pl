"use client"

import { useAccount, useDisconnect } from "wagmi"
import { formatWalletAddress } from "@/lib/web3"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { IoExitOutline, IoCopyOutline, IoCheckmarkSharp } from "react-icons/io5"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"

export const SuccessView = () => {
    // const { disconnect, address } = useWallet()
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { navigateTo } = useWeb3Modal()
    const [isCopied, setIsCopied] = useState(false)
    const t = useTranslations("web3")

    if (!address) return null

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(address)
            setIsCopied(true)

            // Reset stanu po 2 sekundach
            setTimeout(() => {
                setIsCopied(false)
            }, 2000)
        } catch (err) {
            console.error("Nie udało się skopiować tekstu:", err)
        }
    }

    const handleDisconnect = () => {
        disconnect()
        navigateTo("disconnected")
    }

    return (
        <div className="flex flex-column vertical-center">
            <div className="empty-image-wallet"></div>
            <p className="flex gap-1 vertical-center">
                {formatWalletAddress(address)}
                <button onClick={handleCopy}>
                    {isCopied ? (
                        <IoCheckmarkSharp style={{ color: "green" }} />
                    ) : (
                        <IoCopyOutline />
                    )}
                </button>
            </p>
            {/* <p>Saldo: {balance ? `${balance} ETH` : "Ładowanie..."}</p> */}
            <button
                onClick={handleDisconnect}
                className="btn btn-transparent btn-bubble-bottom"
            >
                <span>
                    <IoExitOutline />
                    {t("disconnect")}
                </span>
            </button>
        </div>
    )
}
