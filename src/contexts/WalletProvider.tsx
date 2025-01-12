"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"
import { config } from "@/config/wagmi.config"
import { WalletModal } from "@/components/Web3/WalletModal"

const queryClient = new QueryClient()

export function WalletProvider({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                {children}
                <WalletModal />
            </QueryClientProvider>
        </WagmiProvider>
    )
}
