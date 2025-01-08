/**
 * useEmailSender - Hook do otwierania klienta pocztowego
 *
 * Custom hook generujący funkcję do wysyłania maili poprzez domyślny
 * klient pocztowy użytkownika. Wykorzystuje protokół mailto z predefiniowanym
 * adresem email.
 *
 * @returns
 * sendEmail: (subject?: string, body?: string) => void
 * - Funkcja otwierająca klienta pocztowego
 * - Parametry są opcjonalne i kodowane do URL
 *
 * @parameters
 * - subject: string (domyślnie "") - Temat wiadomości
 * - body: string (domyślnie "") - Treść wiadomości
 *
 * @implementation
 * - Wykorzystuje useCallback dla memoizacji
 * - Tworzy URL z protokołem mailto
 * - Koduje parametry przez encodeURIComponent
 * - Otwiera domyślny klient pocztowy
 *
 * @example
 * ```tsx
 * const EmailButton = () => {
 *   const sendEmail = useEmailSender();
 *
 *   return (
 *     <button onClick={() => sendEmail("Zapytanie", "Treść maila")}>
 *       Wyślij email
 *     </button>
 *   );
 * }
 * ```
 *
 * @security
 * - Parametry są bezpiecznie kodowane do URL
 * - Wykorzystuje standardowy protokół mailto
 *
 * @compatibility
 * - Działa we wszystkich nowoczesnych przeglądarkach
 * - Wymaga skonfigurowanego klienta pocztowego
 */

import { useCallback } from "react"

const useEmailSender = () => {
    const sendEmail = useCallback((subject = "", body = "") => {
        const mailtoLink = `mailto:kocik.dev@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoLink
    }, [])

    return sendEmail
}

export default useEmailSender
