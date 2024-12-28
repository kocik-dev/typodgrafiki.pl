"use client"

import { useWallet } from "@/contexts/WalletContext"
import React from "react"

export default function DisconnectView() {
    const { disconnect, address, isConnected } = useWallet()

    return (
        <div>
            <button onClick={() => disconnect()}>disconnect button</button>
            {address ? address : "brak adresu"}
            {isConnected ? "connected" : "not connected"}
        </div>
    )
}
