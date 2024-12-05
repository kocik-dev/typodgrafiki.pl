import Cursor from "@/components/Cursor"
import "../styles/App.css"
import "../styles/darkMode.css"
import { poppins } from "../components/Fonts"

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
    other: {
        "google-site-verification":
            "JZJXXgpbNeCVSOYNu_rH92o3MmlTiQqEJQhTe3F1JJI",
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl" className={poppins.className}>
            <body>
                {children}
                <Cursor />
            </body>
        </html>
    )
}
