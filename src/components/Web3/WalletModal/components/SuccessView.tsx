/**
 * SuccessView - Widok po pomyślnym połączeniu z portfelem Web3
 *
 * Komponent wyświetla informacje o połączonym portfelu, umożliwia kopiowanie
 * adresu i rozłączenie. Obsługuje animacje i informacje zwrotne dla użytkownika.
 *
 * @features
 * - Wyświetlanie sformatowanego adresu portfela
 * - Kopiowanie adresu do schowka z animacją potwierdzenia
 * - Przycisk rozłączenia portfela
 * - Wsparcie dla internacjonalizacji
 * - Obsługa stanu kopiowania
 *
 * @state
 * - isCopied: boolean - Stan potwierdzenia kopiowania
 *
 * @hooks
 * - useWallet - Dostęp do funkcji portfela (disconnect, address)
 * - useTranslations - Internacjonalizacja
 * - useState - Zarządzanie stanem kopiowania
 *
 * @functions
 * handleCopy()
 * - Kopiuje adres do schowka
 * - Pokazuje potwierdzenie na 2 sekundy
 * - Obsługuje błędy kopiowania
 *
 * @i18n
 * Używa namespace "web3":
 * - disconnect: Tekst przycisku rozłączenia
 *
 * @ui
 * - Empty state dla portfela
 * - Ikony z react-icons/io5
 * - Animowane przejścia stanów
 * - Responsywny layout z flexbox
 *
 * @notes
 * Zawiera zakomentowany kod do obsługi salda ETH,
 * który można odkomentować po dodaniu odpowiedniej konfiguracji.
 *
 * @example
 * // Używane w WalletModal dla stanu success
 * <SuccessView />
 */

"use client"

import { useAccount, useDisconnect, useBalance } from "wagmi"
import { formatWalletAddress } from "@/lib/web3"
import { useTranslationsSection } from "@/hooks/useTranslations"
import { useState } from "react"
import {
    IoExitOutline,
    IoCopyOutline,
    IoCheckmarkSharp,
    IoHammerOutline,
} from "react-icons/io5"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import { addressType } from "@/types/web3"

export const SuccessView = () => {
    const { navigateTo } = useWeb3Modal()
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const [isCopied, setIsCopied] = useState(false)
    const t = useTranslationsSection("web3")

    const handleDisconnect = () => {
        disconnect()
        navigateTo("connect")
    }

    const handleCopy = async () => {
        if (!address) return
        try {
            await navigator.clipboard.writeText(address)
            setIsCopied(true)

            // Reset stanu po 2 sekundach
            setTimeout(() => {
                setIsCopied(false)
            }, 2000)
        } catch (err) {
            console.error("Nie udało się skopiować tekstu:", err)
        }
    }

    const handleNavMint = () => {
        navigateTo("mint")
    }

    return (
        <div className="flex flex-column vertical-center">
            <div className="empty-image-wallet"></div>
            <div className="flex vertical-center">
                {formatWalletAddress(address)}
                <button onClick={handleCopy}>
                    {isCopied ? (
                        <IoCheckmarkSharp style={{ color: "green" }} />
                    ) : (
                        <IoCopyOutline />
                    )}
                </button>
            </div>
            <Balance address={address} />
            <div className="flex gap-1">
                <button
                    onClick={handleNavMint}
                    className="btn btn-default justify-center"
                >
                    {t.mint.button1}
                </button>
                <button
                    onClick={handleDisconnect}
                    className="btn btn-transparent btn-bubble-bottom"
                >
                    <span>
                        <IoExitOutline />
                        {t.disconnect}
                    </span>
                </button>
            </div>
        </div>
    )
}

const Balance = ({ address }: { address: addressType }) => {
    const {
        data: balance,
        isError,
        isLoading,
    } = useBalance({
        address,
    })

    const t = useTranslationsSection("web3")

    if (isLoading) return <p>{t.loading}</p>

    if (!balance || isError) return null

    return (
        <p>
            {parseFloat(balance.formatted).toFixed(2)} {balance.symbol}
        </p>
    )
}
