import { defaultLocale } from "@/i18n/settings"

// Pomocnicza funkcja do pobierania tłumaczeń
export async function getMessages(lang: string) {
    try {
        return (await import(`@root/messages/${lang}.json`)).default
    } catch (error) {
        return (await import(`@root/messages/${defaultLocale}.json`)).default
    }
}
