export interface Web3ModalContextType {
    isOpen: boolean
    view: ModalView
    open: (view?: ModalView) => void
    close: () => void
    navigateTo: (view: ModalView) => void
    canGoBack: boolean
    title: string
    errorMessage: WalletConnectMessageType | null
}

export interface WalletContextType {
    address: string | null
    walletType: WalletTypeProps | null
    isConnecting: boolean
    connect: (type: WalletTypeProps) => Promise<{
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

export type WalletTypeProps = "metamask" | "coinbase"

export type ModalView = "connect" | "install" | "success" | "error"
