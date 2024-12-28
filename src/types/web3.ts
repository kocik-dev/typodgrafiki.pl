export interface WalletContextType {
    address: string | null
    walletType: WalletType | null
    isConnecting: boolean
    connect: (type: WalletType) => Promise<{ success: boolean; error?: string }>
    disconnect: () => void
}

export type WalletType = "metamask" | "coinbase"
