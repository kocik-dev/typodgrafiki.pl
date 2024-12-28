"use client"

import { useWallet } from "@/contexts/WalletContext"
import { getWalletClient } from "@/hooks/---useWalletClient"
import { formatWalletAddress } from "@/lib/web3"
import React from "react"

export default function DisconnectView() {
    const { disconnect, address, isConnected } = useWallet()

    return (
        <div>
            <button onClick={() => disconnect()} className="btn btn-default">
                disconnect button
            </button>
            {address ? formatWalletAddress(address) : null}
            <button>Kopiuj</button>
            {isConnected ? <MintNft /> : null}
        </div>
    )
}

const MintNft = () => {
    const handleMint = async () => {
        const client = await getWalletClient()
        if (!client) return

        try {
            const txHash = await client.writeContract({
                address: contractAddress,
                abi,
                functionName: "mint",
                args: [connectedAccount],
            })

            console.log("NFT wymintowane! Tx hash:", txHash)
            alert(`NFT wymintowane! Hash transakcji: ${txHash}`)
        } catch (error) {
            console.error("Błąd podczas mintowania:", error)
            alert("Wystąpił błąd podczas mintowania NFT.")
        }
    }

    return (
        <div>
            <button className="btn btn-transparent">Mint</button>
        </div>
    )
}
