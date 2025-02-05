export interface Web3ModalContextType {
    isOpen: boolean
    view: ModalView
    open: (view?: ModalView) => void
    close: () => void
    navigateTo: (view: ModalView, errorMessage?: string) => void
    canGoBack: boolean
    title: string
    errorMessage: string | null
}

export type ModalView = "connect" | "install" | "success" | "error" | "mint"

export type addressType = `0x${string}` | undefined
