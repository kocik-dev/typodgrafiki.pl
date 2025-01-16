import { ReactNode } from "react"
import RootLayoutComponent from "@/components/layout/RootLayout"
import { Metadata } from "next"
import { getMessages } from "@/lib/metadata"
import { NextIntlClientProvider } from "next-intl"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> {
    const lang = (await params).lang
    const messages = await getMessages(lang)

    return {
        title: messages.metadata.title,
        description: messages.metadata.description,
    }
}

export default async function LangLayout({
    children,
    params,
}: {
    children: ReactNode
    params: Promise<{ lang: string }>
}) {
    const lang = (await params).lang
    const messages = await getMessages(lang)

    return (
        <NextIntlClientProvider
            locale={lang}
            messages={messages}
        >
            <RootLayoutComponent locale={lang}>{children}</RootLayoutComponent>
        </NextIntlClientProvider>
    )
}
