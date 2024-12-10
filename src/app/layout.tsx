import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import { ReactNode } from "react"

import Cursor from "@/components/Cursor"
import "@/styles/App.css"
import "@/styles/darkMode.css"
import { poppins } from "@/components/Fonts"

export const metadata = {
    title: "Grzegorz Kocik - Front-end Developer",
    description:
        "Cześć. Jestem Grzegorz Front-end developer o zapleczu graficznym z doświadczeniem w tworzeniu warstwy graficznej ecommerce. Szukam możliwości rozwoju przy projektach wykorzystujących nowe technologie (React)",
    keywords: [
        "front-end developer",
        "ui designer",
        "html",
        "css",
        "portfolio",
        "web developer",
        "frontend developer",
        "freelancer",
    ],
    author: "Grzegorz Kocik",
    other: {
        "google-site-verification":
            "JZJXXgpbNeCVSOYNu_rH92o3MmlTiQqEJQhTe3F1JJI",
    },
}

export default async function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    const locale = await getLocale()

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages()
    return (
        <html lang={locale} className={poppins.className}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <Cursor />
            </body>
        </html>
    )
}
