import RootLayoutComponent from "@/components/layout/RootLayout"
import { defaultLocale } from "@/i18n/settings"
import { ReactNode } from "react"

export default async function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    // const messages = await getMessages()
    const messages = (await import(`@root/messages/${defaultLocale}.json`))
        .default

    return (
        <RootLayoutComponent
            locale={defaultLocale}
            messages={messages}
        >
            {children}
        </RootLayoutComponent>
    )
}
