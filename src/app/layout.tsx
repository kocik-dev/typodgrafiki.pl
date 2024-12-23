import { ReactNode } from "react"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import type { Metadata } from "next"
import Cursor from "@/components/Cursor"
import { poppins } from "@/components/Fonts"
import "@/styles/App.css"
import "@/styles/menu.css"
import { Person, WithContext } from "schema-dts"
import { socialLinks } from "@/data/socialLinks"

const title = "Grzegorz Kocik - Front-end Developer"
const description =
    "Cześć. Jestem Grzegorz Front-end developer o zapleczu graficznym z doświadczeniem w tworzeniu warstwy graficznej ecommerce. Szukam możliwości rozwoju przy projektach wykorzystujących nowe technologie (React)"
const url = "https://kocik.dev"

const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Grzegorz Kocik",
    jobTitle: "Front-end Developer",
    description:
        "Doświadczony front-end developer z doświadczeniem w e-commerce.",
    url: url,
    sameAs: [socialLinks.linkedin, socialLinks.github],
    worksFor: {
        "@type": "Organization",
        name: "Freelancer",
    },
}

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
        images: [
            {
                url: `${url}/og.png`,
                width: 1200,
                height: 630,
            },
        ],
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
    icons: {
        icon: [
            { url: "/icon.svg" },
            { url: "/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
        ],
        shortcut: ["/shortcut-icon.png"],
        apple: [
            { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
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
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <Cursor />
            </body>
        </html>
    )
}
