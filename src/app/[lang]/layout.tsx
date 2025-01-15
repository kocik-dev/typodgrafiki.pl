// app/[lang]/layout.tsx
import { ReactNode } from "react"
import RootLayoutComponent from "@/components/layout/RootLayout"
import { poppins } from "@/components/Fonts"
import Cursor from "@/components/Cursor"
import { jsonLd } from "@/app/layout"

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
        <html lang={locale} className={poppins.className}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <RootLayoutComponent locale={locale} messages={messages}>
                    {children}
                </RootLayoutComponent>
                <Cursor />
            </body>
        </html>
    )
}
