import { match } from "@formatjs/intl-localematcher"
import { NextResponse } from "next/server"

const locales = [
    // Ameryka Północna
    "en-US", // USA - szczególnie okolice San Francisco, Nowy Jork
    "en-CA", // Kanada - Toronto, Vancouver

    // Europa Zachodnia i Północna
    "de-DE", // Niemcy - szczególnie Berlin, Monachium
    "fr-FR", // Francja - Paryż
    "nl-NL", // Holandia - Amsterdam
    "dk-DK", // Dania - Kopenhaga
    "no-NO", // Norwegia - Oslo
    "se-SE", // Szwecja - Sztokholm
    "fi-FI", // Finlandia - Helsinki
    "en-IE", // Irlandia - Dublin (hub technologiczny)
    "en-GB", // Wielka Brytania - Londyn
    "de-CH", // Szwajcaria - Zurych
    "pl-PL", // Polska

    // Azja (wybrane bogate regiony)
    "ja-JP", // Japonia - Tokio
    "ko-KR", // Korea Południowa - Seul
    "zh-HK", // Hong Kong
    "en-SG", // Singapur

    // Bliski Wschód (bogate regiony)
    "ar-AE", // ZEA - Dubai
    "ar-QA", // Katar
    "he-IL", // Izrael - Tel Aviv (silicon wadi)

    // Australia i Oceania
    "en-AU", // Australia - Sydney, Melbourne
    "en-NZ", // Nowa Zelandia
] as const

const defaultLocale = "en-US"

function getLocale(request: Request): string {
    try {
        const acceptLanguage = request.headers.get("accept-language")

        console.log(acceptLanguage)

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
    console.log("---------")

    const { pathname } = new URL(request.url)

    console.log("1. pathname: ", pathname)

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

    console.log("2. userLocale: ", userLocale)

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
