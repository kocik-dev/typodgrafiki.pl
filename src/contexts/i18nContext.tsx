"use client"

import { createContext, useContext, ReactNode } from "react"
import { Translations } from "@/types/i18n"

type I18nContextType = {
    translations: Translations
    locale: string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

type I18nProviderProps = {
    children: ReactNode
    locale: string
    translations: Translations
}

export function I18nProvider({
    children,
    locale,
    translations,
}: I18nProviderProps) {
    return (
        <I18nContext.Provider value={{ translations, locale }}>
            {children}
        </I18nContext.Provider>
    )
}

export function useI18nContext() {
    const context = useContext(I18nContext)
    if (context === undefined) {
        throw new Error("useI18nContext must be used within a I18nProvider")
    }
    return context
}
