"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"
import { config } from "@/config/wagmi.config"
import React from "react"
import { Web3ModalProvider } from "./Web3ModalContext"
import dynamic from "next/dynamic"

const WalletModal = dynamic(() => import("@/components/Web3/WalletModal"), {
    ssr: false,
})

const queryClient = new QueryClient()

export function WalletProvider({ children }: { children: React.ReactNode }) {
    return (
        <Web3ModalProvider>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <WalletModal />
                </QueryClientProvider>
            </WagmiProvider>
        </Web3ModalProvider>
    )
}
