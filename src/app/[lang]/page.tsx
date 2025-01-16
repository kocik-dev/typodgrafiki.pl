import React from "react"
import PageHome from "@/components/layout/PageHome"
import { getMessages } from "@/lib/metadata"

const Home = async ({ params }: { params: Promise<{ lang: string }> }) => {
    const lang = (await params).lang
    const messages = await getMessages(lang)
    return <PageHome messages={messages} />
}

export default Home
