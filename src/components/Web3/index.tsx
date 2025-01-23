"use client"

import React from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/Web3/WalletButton"

const WalletButton = dynamic(() => import("@/components/Web3/WalletButton"), {
    ssr: false,
    loading: () => <Button address={undefined} handleClick={() => {}} />,
})

export default function Wallet() {
    return <WalletButton />
}
