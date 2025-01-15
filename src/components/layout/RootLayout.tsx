import { ReactNode } from "react"
import { NextIntlClientProvider } from "next-intl"
import { Web3ModalProvider } from "@/contexts/Web3ModalContext"
import { WalletProvider } from "@/contexts/WalletContext"
import { WalletModal } from "@/components/Web3/WalletModal"

type RootLayoutProps = {
    children: ReactNode
    locale: string
    messages: any
}

// Zauważ, że nie zwracamy już tagu html
export default function RootLayoutComponent({
    children,
    locale,
    messages,
}: RootLayoutProps) {
    return (
        <Web3ModalProvider>
            <WalletProvider>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                    <WalletModal />
                </NextIntlClientProvider>
            </WalletProvider>
        </Web3ModalProvider>
    )
}
