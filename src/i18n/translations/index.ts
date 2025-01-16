import { translations as enUS } from "./en-US"
import { translations as plPL } from "./pl-PL"
import { Translations } from "@/types/i18n"
import { defaultLocale } from "../settings"
import { getLocaleFromHeaders } from "@/lib/i18n"

export const translations: Record<string, Translations> = {
    "en-US": enUS,
    "pl-PL": plPL,
}

// Helper do pobierania tłumaczeń
export function getTranslations(locale: string): Translations {
    return translations[locale] || translations[defaultLocale]
}

// Helper do pobierania tłumaczeń dla konkretnej sekcji
export async function getSectionTranslations<K extends keyof Translations>(
    section: K
): Promise<Translations[K]> {
    const locale = await getLocaleFromHeaders()
    const t = getTranslations(locale)
    return t[section]
}
