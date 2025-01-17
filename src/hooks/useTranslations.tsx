"use client"

import { Translations } from "@/types/i18n"
import { useI18nContext } from "@/contexts/i18nContext"

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
