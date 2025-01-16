import { match } from "@formatjs/intl-localematcher"
import { NextResponse } from "next/server"
import { locales, defaultLocale } from "@/i18n/settings"
import type { NextRequest } from "next/server"

function getLocale(request: NextRequest): string {
    try {
        const acceptLanguage = request.headers.get("accept-language")
        if (!acceptLanguage) {
            return defaultLocale
        }

        const languages = acceptLanguage.split(",").map((lang) => {
            const [language] = lang.trim().split(";q=")
            return language
        })

        return match(languages, locales, defaultLocale)
    } catch (error) {
        console.error("Error getting locale:", error)
        return defaultLocale
    }
}

export function middleware(request: NextRequest) {
    const { pathname } = new URL(request.url)

    // Ignoruj ścieżki statyczne i API
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next()
    }

    // Sprawdź czy ścieżka już zawiera lokalizację
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) {
        const response = NextResponse.next()
        response.headers.set("x-locale", pathname.split("/")[1])
        return response
    }

    // Pobierz preferowany język użytkownika
    const userLocale = getLocale(request)

    // Dla domyślnego języka nie dodawaj prefiksu
    if (userLocale === defaultLocale) {
        const response = NextResponse.next()
        response.headers.set("x-locale", defaultLocale)
        return response
    }

    // Dla innych języków, przekieruj na wersję z prefiksem
    const newUrl = new URL(request.url)
    newUrl.pathname = `/${userLocale}${pathname}`

    const response = NextResponse.redirect(newUrl)
    response.headers.set("Cache-Control", "public, max-age=3600")
    response.headers.set("x-locale", userLocale)

    return response
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|.*\\.(?:svg|png|ico)|robots\\.txt|sitemap\\.xml).*)",
    ],
}
