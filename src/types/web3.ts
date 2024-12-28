export interface WalletContextType {
    address: string | null
    isConnected: boolean
    connect: (type: WalletType) => Promise<{ success: boolean; error?: string }>
    disconnect: () => void
}

export type WalletType = "metamask" | "coinbase"
