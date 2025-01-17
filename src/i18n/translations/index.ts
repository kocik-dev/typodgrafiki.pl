import { translations as enUS } from "./en-US"
import { translations as plPL } from "./pl-PL"
import { translations as deDE } from "./de-DE"
import { translations as frFR } from "./fr-FR"
import { translations as nlNL } from "./nl-NL"
import { translations as dkDK } from "./dk-DK"
import { translations as noNO } from "./no-NO"
import { translations as seSE } from "./se-SE"
import { translations as fiFI } from "./fi-FI"
import { translations as jaJP } from "./ja-JP"
import { translations as koKR } from "./ko-KR"
import { translations as zhHK } from "./zh-HK"
import { translations as arAE } from "./ar-AE"
import { translations as arQA } from "./ar-QA"
import { translations as heIL } from "./he-IL"
import { Translations } from "@/types/i18n"
import { defaultLocale } from "../settings"
import { getLocaleFromHeaders } from "@/lib/i18n"

export const translations: Record<string, Translations> = {
    "en-US": enUS,
    "pl-PL": plPL,
    "de-DE": deDE,
    "fr-FR": frFR,
    "nl-NL": nlNL,
    "dk-DK": dkDK,
    "no-NO": noNO,
    "se-SE": seSE,
    "fi-FI": fiFI,
    "de-CH": deDE,
    "ja-JP": jaJP,
    "ko-KR": koKR,
    "zh-HK": zhHK,
    "en-SG": enUS,
    "ar-AE": arAE,
    "ar-QA": arQA,
    "he-IL": heIL,
    "en-AU": enUS,
    "en-NZ": enUS,
}

// Helper do pobierania tłumaczeń
export function getTranslations(locale: string): Translations {
    return translations[locale] || translations[defaultLocale]
}

// Helper do pobierania tłumaczeń dla konkretnej sekcji
export async function getTranslationsSection<K extends keyof Translations>(
    section: K
): Promise<Translations[K]> {
    const locale = await getLocaleFromHeaders()
    const t = getTranslations(locale)
    return t[section]
}
