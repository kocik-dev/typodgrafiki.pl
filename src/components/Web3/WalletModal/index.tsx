/**
 * WalletModal - Modalne okno zarządzania portfelem Web3
 *
 * Komponent wyświetla modalne okno z różnymi widokami związanymi z łączeniem
 * i zarządzaniem portfelem kryptowalutowym. Obsługuje nawigację między widokami,
 * zamykanie modalu i overlay tła.
 *
 * @features
 * - Wielowidokowy interfejs
 * - Nawigacja z historią (możliwość powrotu)
 * - Zamykanie przez przycisk lub kliknięcie tła
 * - Responsywny design
 *
 * @views
 * Obsługiwane widoki:
 * - connect: Widok łączenia z portfelem
 * - install: Instrukcje instalacji portfela
 * - success: Potwierdzenie połączenia
 * - error: Obsługa błędów
 *
 * @navigation
 * - Przycisk powrotu (pokazywany gdy canGoBack=true)
 * - Przycisk zamknięcia
 * - Kliknięcie w tło zamyka modal
 *
 * @hooks
 * useWeb3Modal zwraca:
 * - isOpen: Stan otwarcia modalu
 * - view: Aktualny widok
 * - close: Funkcja zamykania
 * - title: Tytuł aktualnego widoku
 * - navigateTo: Funkcja nawigacji
 * - canGoBack: Możliwość powrotu
 *
 * @styling
 * - modal.css dla stylowania
 * - Flexbox dla layoutu
 * - Overlay dla tła
 * - Ikony z react-icons/lia
 *
 * @components
 * - ConnectView: Widok łączenia
 * - InstallView: Widok instalacji
 * - SuccessView: Widok sukcesu
 * - ErrorView: Widok błędu
 *
 * @accessibility
 * - Użycie natywnego elementu <dialog>
 * - Właściwa struktura nagłówków
 * - Interaktywne elementy jako przyciski
 * - Zamykanie przez overlay
 *
 * @example
 * ```jsx
 * <WalletModal />
 * ```
 */

"use client"

import React from "react"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import { ConnectView } from "./components/ConnectView"
import { SuccessView } from "./components/SuccessView"
import { LiaAngleLeftSolid, LiaTimesSolid } from "react-icons/lia"
import InstallView from "./components/InstallView"
import ErrorView from "./components/ErrorView"
import "@/styles/modal.css"
import MintView from "./components/MintNFT"

const WalletModal = () => {
    const { isOpen, view, close, title, navigateTo, canGoBack } = useWeb3Modal()

    const renderContent = () => {
        switch (view) {
            case "connect":
                return <ConnectView />
            case "install":
                return <InstallView />
            case "success":
                return <SuccessView />
            case "mint":
                return <MintView />
            case "error":
                return <ErrorView />
        }
    }

    const goBack = () => {
        if (view === "mint") {
            navigateTo("success")
        } else {
            navigateTo("connect")
        }
    }

    return (
        <>
            <dialog
                className="modal"
                open={isOpen}
            >
                <header className="flex modal-header justify-between align-center vertical-center">
                    <button
                        onClick={goBack}
                        disabled={!canGoBack}
                        style={{ opacity: canGoBack ? "1" : "0" }}
                    >
                        <LiaAngleLeftSolid />
                    </button>
                    <div>{title}</div>
                    <button onClick={close}>
                        <LiaTimesSolid />
                    </button>
                </header>
                <div className="modal-content">{renderContent()}</div>
            </dialog>
            {isOpen ? (
                <div
                    className="modal-shadow"
                    onClick={close}
                ></div>
            ) : null}
        </>
    )
}

export default WalletModal
