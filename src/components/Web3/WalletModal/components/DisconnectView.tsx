"use client"

import { useWallet } from "@/contexts/WalletContext"
import { useState, useEffect } from "react"
import { publicClient } from "@/config/web3.config"
import { formatWalletAddress } from "@/lib/web3"
import { formatEther } from "viem"

export const DisconnectView = () => {
    const { disconnect, address } = useWallet()
    const [balance, setBalance] = useState<string | null>(null)

    useEffect(() => {
        const fetchBalance = async () => {
            if (!address) return

            try {
                // Pobierz saldo portfela
                const balanceInWei = await publicClient.getBalance({
                    address: address as `0x${string}`,
                })
                const balanceInEther = formatEther(balanceInWei)
                setBalance(Number(balanceInEther).toFixed(4))
            } catch (error) {
                console.error("Failed to fetch balance:", error)
                setBalance(null)
            }
        }

        fetchBalance()
    }, [address])

    if (!address) return null

    return (
        <div className="flex flex-column vertical-center">
            <div className="empty-image-wallet"></div>
            <p>{formatWalletAddress(address)}</p>
            <p>Kopiuj</p>
            <p>Saldo: {balance ? `${balance} ETH` : "Ładowanie..."}</p>
            <button onClick={disconnect} className="btn btn-transparent">
                Disconnect
            </button>
        </div>
    )
}
