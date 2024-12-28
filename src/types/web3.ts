export interface WalletContextType {
    address: string | null
    walletType: WalletType | null
    isConnecting: boolean
    connect: (type: WalletType) => Promise<{
        success: boolean
        error?: string
        message: WalletConnectMessageType
    }>
    disconnect: () => void
}

export type WalletConnectMessageType = {
    title: string
    text: string
    btn?: boolean
}

export type WalletType = "metamask" | "coinbase"

export type ModalView = "connect" | "install" | "success" | "error"
