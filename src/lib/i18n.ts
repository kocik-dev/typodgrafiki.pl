import { defaultLocale } from "@/i18n/settings"
import { headers } from "next/headers"

export async function getLocaleFromHeaders() {
    const headersList = await headers()
    return headersList.get("x-locale") || defaultLocale
}
