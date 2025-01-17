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

export const isBadUrl = (url: string) => {
    return !locales.includes(url)
}
