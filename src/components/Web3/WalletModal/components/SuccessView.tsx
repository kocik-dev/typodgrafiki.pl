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

import { useWallet } from "@/contexts/WalletContext"
// import { publicClient } from "@/config/web3.config"
import { formatWalletAddress } from "@/lib/web3"
import { useTranslationsSection } from "@/hooks/useTranslations"
import { useState } from "react"
// import { formatEther } from "viem"
import { IoExitOutline, IoCopyOutline, IoCheckmarkSharp } from "react-icons/io5"

export const SuccessView = () => {
    const { disconnect, address } = useWallet()
    const [isCopied, setIsCopied] = useState(false)
    const t = useTranslationsSection("web3")
    // const [balance, setBalance] = useState<string | null>(null)

    // useEffect(() => {
    //     const fetchBalance = async () => {
    //         if (!address) return

    //         try {
    //             // Pobierz saldo portfela
    //             const balanceInWei = await publicClient.getBalance({
    //                 address: address as `0x${string}`,
    //             })
    //             const balanceInEther = formatEther(balanceInWei)
    //             setBalance(Number(balanceInEther).toFixed(4))
    //         } catch (error) {
    //             console.error("Failed to fetch balance:", error)
    //             setBalance(null)
    //         }
    //     }

    //     fetchBalance()
    // }, [address])

    if (!address) return null

    const handleCopy = async () => {
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

    return (
        <div className="flex flex-column vertical-center">
            <div className="empty-image-wallet"></div>
            <p className="flex gap-1 vertical-center">
                {formatWalletAddress(address)}
                <button onClick={handleCopy}>
                    {isCopied ? (
                        <IoCheckmarkSharp style={{ color: "green" }} />
                    ) : (
                        <IoCopyOutline />
                    )}
                </button>
            </p>
            {/* <p>Saldo: {balance ? `${balance} ETH` : "Ładowanie..."}</p> */}
            <button
                onClick={disconnect}
                className="btn btn-transparent"
            >
                <IoExitOutline />
                {t.disconnect}
            </button>
        </div>
    )
}
