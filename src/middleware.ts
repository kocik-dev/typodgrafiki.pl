import { match } from "@formatjs/intl-localematcher"
import { NextResponse } from "next/server"
import { locales, defaultLocale } from "@/i18n/settings"

function getLocale(request: Request): string {
    try {
        const acceptLanguage = request.headers.get("accept-language")

        if (!acceptLanguage) {
            return defaultLocale
        }

        // Proste parsowanie nagłówka accept-language
        const languages = acceptLanguage.split(",").map((lang) => {
            const [language, weight] = lang.trim().split(";q=")
            return language
        })

        return match(languages, locales, defaultLocale)
    } catch (error) {
        console.error("Error getting locale:", error)
        return defaultLocale
    }
}

export function middleware(request: Request) {
    const { pathname } = new URL(request.url)

    // Sprawdź czy ścieżka już zawiera lokalizację
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) {
        return NextResponse.next()
    }

    // Sprawdź preferencje językowe użytkownika
    const userLocale = getLocale(request)

    // Jeśli użytkownik preferuje domyślny język (np. en-US),
    // nie rób przekierowania i zostaw oryginalny URL
    if (userLocale === defaultLocale) {
        return NextResponse.next()
    }

    // Dla innych języków, przekieruj na odpowiednią wersję
    const newUrl = new URL(request.url)
    newUrl.pathname = `/${userLocale}${pathname}`

    const response = NextResponse.redirect(newUrl)
    response.headers.set("Cache-Control", "public, max-age=3600")
    return response
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|.*\\.(?:svg|png|ico)|robots\\.txt|sitemap\\.xml).*)",
    ],
}
