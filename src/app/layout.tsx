import "@/styles/App.css"
import "@/styles/menu.css"
import "@/styles/accesibility.css"
import { metadata } from "@/config/metadata.config"
import { headers } from "next/headers"
import { defaultLocale } from "@/i18n/settings"
import Cursor from "@/components/Cursor"
import { poppins } from "@/components/Fonts"
import { Web3ModalProvider } from "@/contexts/Web3ModalContext"
import { WalletProvider } from "@/contexts/WalletContext"
import { WalletModal } from "@/components/Web3/WalletModal"
import { jsonLd } from "@/config/metadata.config"
import { getTranslations } from "@/i18n/translations"
import { getLocaleFromHeaders } from "@/lib/i18n"
import { I18nProvider } from "@/contexts/i18nContext"

export { metadata }

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const locale = await getLocaleFromHeaders()
    const translations = getTranslations(locale)

    return (
        <html
            lang={locale}
            className={poppins.className}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
            </head>
            <body>
                <I18nProvider
                    locale={locale}
                    translations={translations}
                >
                    <Web3ModalProvider>
                        <WalletProvider>
                            {children}
                            <WalletModal />
                        </WalletProvider>
                    </Web3ModalProvider>
                    <Cursor />
                </I18nProvider>
            </body>
        </html>
    )
}
