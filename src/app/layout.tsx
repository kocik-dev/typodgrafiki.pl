import "@/styles/App.css"
import "@/styles/menu.css"
import "@/styles/accesibility.css"
import { metadata } from "@/config/metadata.config"

export { metadata }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
