/**
 * WalletButton - Przycisk połączenia z portfelem Web3
 *
 * Komponent wyświetla przycisk do zarządzania połączeniem z portfelem
 * kryptowalutowym. Pokazuje adres portfela po połączeniu lub przycisk
 * do połączenia gdy użytkownik nie jest połączony.
 *
 * @features
 * - Integracja z Web3Modal
 * - Dynamiczny tekst przycisku
 * - Formatowanie adresu portfela
 * - Obsługa stanu połączenia
 *
 * @hooks
 * - useWallet - Stan połączenia z portfelem
 * - useWeb3Modal - Kontrola modalu Web3
 * - useTranslations - Internacjonalizacja
 *
 * @interactions
 * - Kliknięcie otwiera modal w odpowiednim trybie:
 *   - 'connect' dla niepołączonego użytkownika
 *   - 'success' dla połączonego użytkownika
 *
 * @i18n
 * Wykorzystuje przestrzeń nazw "web3":
 * - btnConnectWeb3: Tekst przycisku połączenia
 *
 * @utils
 * - formatWalletAddress - Formatuje adres portfela do przyjaznej formy
 *
 * @context
 * Wymaga dostępu do:
 * - WalletContext
 * - Web3ModalContext
 *
 * @styling
 * - Klasa btn-default dla stylowania przycisku
 * - Pozycjonowanie relative dla menu-web3
 *
 * @example
 * ```jsx
 * <WalletButton />
 * ```
 *
 * @example
 * // Przy użyciu w menu
 * <li className="wallet">
 *   <WalletButton />
 * </li>
 */

"use client"

import React from "react"
import { useWallet } from "@/contexts/WalletContext"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import { formatWalletAddress } from "@/lib/web3"
import { useTranslations } from "next-intl"

export const WalletButton = () => {
    const { address } = useWallet()
    const { open } = useWeb3Modal()

    const t = useTranslations("web3")

    const handleClick = () => {
        open(address ? "success" : "connect")
    }

    return (
        <div className="menu-web3 relative">
            <button
                className="btn btn-default"
                onClick={handleClick}
            >
                {address ? formatWalletAddress(address) : t("btnConnectWeb3")}
            </button>
        </div>
    )
}
