import { defaultLocale, locales } from "@/i18n/settings"
import { Locale } from "@/types/i18n"
import { headers } from "next/headers"

export async function getLocaleFromHeaders() {
    const headersList = await headers()
    return headersList.get("x-locale") || defaultLocale
}

export const getLangUrl = async (locale?: Locale) => {
    let lang = locale

    if (!locale) {
        lang = await getLocaleFromHeaders()
    }

    const basePath = lang === defaultLocale ? "" : `/${lang}`
    return basePath
}

export const isBadUrl = (url: Locale): boolean => {
    return !locales.includes(url)
}
