import React from "react"
import PageHome from "@/components/layout/PageHome"
import { isBadUrl } from "@/lib/i18n"
import { notFound } from "next/navigation"
import { locales } from "@/i18n/settings"
import { Locale } from "@/types/i18n"

export async function generateStaticParams() {
    const params = locales.map((locale) => ({
        lang: locale,
    }))

    return params
}

const HomeLang = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
    const lang = (await params).lang

    if (isBadUrl(lang)) {
        notFound()
    }

    return <PageHome />
}

export default HomeLang
