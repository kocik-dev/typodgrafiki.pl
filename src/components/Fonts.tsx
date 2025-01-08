/**
 * Konfiguracja fontów dla aplikacji
 *
 * Konfiguruje i eksportuje fonty Google dla projektu:
 * - Poppins jako główny font tekstowy
 * - Fascinate Inline jako font ozdobny dla nagłówków
 *
 * @exports
 * - poppins: Główny font tekstowy
 *   - Wagi: 100, 200, 300, 400, 500, 600
 *   - Obsługiwane zestawy znaków: latin, latin-ext
 *   - display: swap dla optymalizacji ładowania
 *
 * - fascinate: Font ozdobny
 *   - Waga: 400
 *   - Obsługiwany zestaw znaków: latin
 *   - display: swap dla optymalizacji ładowania
 *
 * @optimization
 * - Wykorzystuje font-display: swap dla lepszej wydajności
 * - Ograniczone zestawy znaków dla mniejszego rozmiaru
 * - Selektywne ładowanie wag fontów
 *
 * @usage
 * @example
 * // Użycie w komponencie:
 * import { poppins, fascinate } from '@/components/Fonts'
 *
 * <h1 className={fascinate.className}>Tytuł</h1>
 * <p className={poppins.className}>Tekst</p>
 */

import { Poppins, Fascinate_Inline } from "next/font/google"

export const poppins = Poppins({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600"],
})

export const fascinate = Fascinate_Inline({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
})
