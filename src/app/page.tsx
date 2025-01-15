import RootLayoutComponent from "@/components/layout/RootLayout"
import { getMessages } from "next-intl/server"
import { ReactNode } from "react"

export default async function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    // const messages = await getMessages()
    const messages = (await import(`@root/messages/en-US.json`)).default

    return (
        <RootLayoutComponent locale="en-US" messages={messages}>
            {children}
        </RootLayoutComponent>
    )
}
