import Head from "next/head"
import "../styles/App.css"
import "../styles/darkMode.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: ["400", "500", "600"],
})

export const metadata = {
    title: "Grzegorz Kocik - Front-end Developer Portfolio",
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
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl">
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
