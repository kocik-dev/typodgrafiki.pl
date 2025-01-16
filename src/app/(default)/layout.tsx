import RootLayoutComponent from "@/components/layout/RootLayout"
import { defaultLocale } from "@/i18n/settings"
import { NextIntlClientProvider } from "next-intl"
import { ReactNode } from "react"

export default async function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    const messages = (await import(`@root/messages/${defaultLocale}.json`))
        .default

    return (
        <NextIntlClientProvider
            locale={defaultLocale}
            messages={messages}
        >
            <RootLayoutComponent locale={defaultLocale}>
                {children}
            </RootLayoutComponent>
        </NextIntlClientProvider>
    )
}
