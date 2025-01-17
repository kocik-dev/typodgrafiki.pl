import { defaultLocale, locales } from "@/i18n/settings"
import { headers } from "next/headers"

export async function getLocaleFromHeaders() {
    const headersList = await headers()
    return headersList.get("x-locale") || defaultLocale
}

export const getLangUrl = async () => {
    const locale = await getLocaleFromHeaders()
    const basePath = locale === defaultLocale ? "" : `/${locale}`
    return basePath
}

// Funkcja pomocnicza do generowania linków
export const generateHref = async (path: string) => {
    const locale = await getLocaleFromHeaders()
    const basePath = locale === defaultLocale ? "" : `/${locale}`
    return `${basePath}${path}`
}

export const isBadUrl = (url: string) => {
    return !locales.includes(url)
}
