// app/[lang]/layout.tsx
import { ReactNode } from "react"
import RootLayoutComponent from "@/components/layout/RootLayout"
import { poppins } from "@/components/Fonts"

export default async function LocalizedLayout({
    children,
    params: { locale },
}: {
    children: ReactNode
    params: { locale: string }
}) {
    let messages
    try {
        messages = (await import(`@root/messages/${locale}.json`)).default
    } catch (error) {
        messages = (await import(`@root/messages/en-US.json`)).default
    }

    return (
        <RootLayoutComponent locale={locale} messages={messages}>
            {children}
        </RootLayoutComponent>
    )
}
