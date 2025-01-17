import React from "react"
import PageHome from "@/components/layout/PageHome"
import { isBadUrl } from "@/lib/i18n"
import { notFound } from "next/navigation"

const HomeLang = async ({ params }: { params: Promise<{ lang: string }> }) => {
    const lang = (await params).lang

    if (isBadUrl(lang)) {
        notFound()
    }

    return <PageHome />
}

export default HomeLang
