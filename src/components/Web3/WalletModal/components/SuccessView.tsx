"use client"

import { useWallet } from "@/contexts/WalletContext"
// import { publicClient } from "@/config/web3.config"
import { formatWalletAddress } from "@/lib/web3"
import { useTranslations } from "next-intl"
import { useState } from "react"
// import { formatEther } from "viem"
import { IoExitOutline, IoCopyOutline, IoCheckmarkSharp } from "react-icons/io5"

export const SuccessView = () => {
    const { disconnect, address } = useWallet()
    const [isCopied, setIsCopied] = useState(false)
    const t = useTranslations("web3")
    // const [balance, setBalance] = useState<string | null>(null)

    // useEffect(() => {
    //     const fetchBalance = async () => {
    //         if (!address) return

    //         try {
    //             // Pobierz saldo portfela
    //             const balanceInWei = await publicClient.getBalance({
    //                 address: address as `0x${string}`,
    //             })
    //             const balanceInEther = formatEther(balanceInWei)
    //             setBalance(Number(balanceInEther).toFixed(4))
    //         } catch (error) {
    //             console.error("Failed to fetch balance:", error)
    //             setBalance(null)
    //         }
    //     }

    //     fetchBalance()
    // }, [address])

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
                onClick={disconnect}
                className="btn btn-transparent"
            >
                <IoExitOutline />
                {t("disconnect")}
            </button>
        </div>
    )
}
