import { ReactNode } from "react"
import { NextIntlClientProvider } from "next-intl"
import Cursor from "@/components/Cursor"
import { poppins } from "@/components/Fonts"
import { Web3ModalProvider } from "@/contexts/Web3ModalContext"
import { WalletProvider } from "@/contexts/WalletContext"
import { WalletModal } from "@/components/Web3/WalletModal"
import { jsonLd } from "@/config/metadata.config"

type RootLayoutProps = {
    children: ReactNode
    locale: string
    messages: any
}

export default function RootLayoutComponent({
    children,
    locale,
    messages,
}: RootLayoutProps) {
    return (
        <html
            lang={locale}
            className={poppins.className}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <Web3ModalProvider>
                    <WalletProvider>
                        <NextIntlClientProvider
                            locale={locale}
                            messages={messages}
                        >
                            {children}
                            <WalletModal />
                        </NextIntlClientProvider>
                    </WalletProvider>
                </Web3ModalProvider>
                <Cursor />
            </body>
        </html>
    )
}
