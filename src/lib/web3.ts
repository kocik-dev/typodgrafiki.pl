/**
 * formatWalletAddress - Formatowanie adresu portfela kryptowalutowego
 *
 * Funkcja skraca długi adres portfela do formatu "6 pierwszych znaków...4 ostatnie znaki"
 * dla lepszej czytelności w interfejsie użytkownika.
 *
 * @param {string} address - Pełny adres portfela do sformatowania
 * @returns {string} Sformatowany adres lub "Invalid address" w przypadku błędu
 *
 * @example
 * // Przykładowe użycie:
 * formatWalletAddress("0x742d35Cc6634C0532925a3b844Bc454e4438f44e")
 * // Zwraca: "0x742d....f44e"
 *
 * formatWalletAddress("")
 * // Zwraca: "Invalid address"
 *
 * @validation
 * - Sprawdza czy adres istnieje
 * - Sprawdza minimalną długość (10 znaków)
 * - Zwraca komunikat błędu dla nieprawidłowych danych
 */

import { addressType } from "@/types/web3"

export const formatWalletAddress = (address: addressType) => {
    const dots = "...."
    if (!address || address.length < 10) {
        return "Invalid address"
    }
    return `${address.slice(0, 6) + dots + address.slice(-4)}`
}
