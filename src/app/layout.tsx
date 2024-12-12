import { ReactNode } from "react"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import type { Metadata } from "next"
import Cursor from "@/components/Cursor"
import { poppins } from "@/components/Fonts"
import "@/styles/App.css"
import "@/styles/menu.css"

const title = "Grzegorz Kocik - Front-end Developer"
const description =
    "Cześć. Jestem Grzegorz Front-end developer o zapleczu graficznym z doświadczeniem w tworzeniu warstwy graficznej ecommerce. Szukam możliwości rozwoju przy projektach wykorzystujących nowe technologie (React)"
const url = "https://kocik.dev"

export const metadata: Metadata = {
    applicationName: "Kocik.dev",
    title: title,
    description: description,
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
    authors: [{ name: "Grzegorz Kocik" }],
    creator: "Grzegorz Kocik",
    generator: "Next.js",
    metadataBase: new URL(url),
    alternates: {
        canonical: "/",
        // languages: {
        //     'en-US': '/en-US',
        //     'de-DE': '/de-DE',
        // },
    },

    openGraph: {
        title: title,
        description: description,
        url: url,
        siteName: "Kocik.dev",
        // images: [
        //     {
        //         url: "https://nextjs.org/og.png", // Must be an absolute URL //TODO: Dodac img
        //         width: 800,
        //         height: 600,
        //     },
        //     {
        //         url: "https://nextjs.org/og-alt.png", // Must be an absolute URL //TODO: Dodac img
        //         width: 1800,
        //         height: 1600,
        //         alt: "My custom alt",
        //     },
        // ],
        // videos: [
        //     {
        //         url: "https://nextjs.org/video.mp4", // Must be an absolute URL //TODO: Dodac img
        //         width: 800,
        //         height: 600,
        //     },
        // ],
        // audio: [
        //     {
        //         url: "https://nextjs.org/audio.mp3", // Must be an absolute URL //TODO: Dodac img
        //     },
        // ],
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
        },
    },
    // icons: {
    //     icon: [
    //         { url: "/icon.svg" }, //TODO: Dodac img
    //         { url: "/icon-dark.svg", media: "(prefers-color-scheme: dark)" }, //TODO: Dodac img
    //     ],
    //     shortcut: ["/shortcut-icon.png"], //TODO: Dodac img
    //     apple: [
    //         { url: "/apple-icon.png" }, //TODO: Dodac img
    //         { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" }, //TODO: Dodac img
    //     ],
    //     other: [
    //         {
    //             rel: "apple-touch-icon-precomposed", //TODO: Dodac img
    //             url: "/apple-touch-icon-precomposed.png", //TODO: Dodac img
    //         },
    //     ],
    // },
    // twitter: {
    //     //TODO: Sprawdz calosc
    //     card: "summary_large_image",
    //     title: "Next.js",
    //     description: "The React Framework for the Web",
    //     siteId: "1467726470533754880",
    //     creator: "@nextjs",
    //     creatorId: "1467726470533754880",
    //     images: ["https://nextjs.org/og.png"], // Must be an absolute URL
    // },
    // verification: {
    //     google: "JZJXXgpbNeCVSOYNu_rH92o3MmlTiQqEJQhTe3F1JJI",
    // },
    category: "Web Development",
}

export default async function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    const locale = await getLocale()
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
