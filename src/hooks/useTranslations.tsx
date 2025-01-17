"use client"

import { Translations } from "@/types/i18n"
import { useI18nContext } from "@/contexts/i18nContext"
import { defaultLocale } from "@/i18n/settings"

export function useTranslationsSection<K extends keyof Translations>(
    section: K
): Translations[K] {
    const { translations } = useI18nContext()
    return translations[section]
}

export function useTranslations() {
    const { translations } = useI18nContext()
    return translations
}

export function useLocale() {
    const { locale } = useI18nContext()
    return locale === defaultLocale ? "" : `/${locale}`
}
