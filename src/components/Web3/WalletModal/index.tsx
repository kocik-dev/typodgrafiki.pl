"use client"

import React from "react"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import { ConnectView } from "./components/ConnectView"
import { SuccessView } from "./components/SuccessView"
import { LiaAngleLeftSolid, LiaTimesSolid } from "react-icons/lia"
import {
    InstallMetamaskView,
    InstallCoinbaseView,
} from "./components/InstallView"
import ErrorView from "./components/ErrorView"
import "@/styles/modal.css"
import DisconnectedView from "./components/DisconnectedView"

export const WalletModal = () => {
    const { isOpen, view, close, title, navigateTo, canGoBack } = useWeb3Modal()

    const renderContent = () => {
        switch (view) {
            case "connect":
                return <ConnectView />
            case "installMetamask":
                return <InstallMetamaskView />
            case "installCoinbase":
                return <InstallCoinbaseView />
            case "success":
                return <SuccessView />
            case "error":
                return <ErrorView />
            case "disconnected":
                return <DisconnectedView />
        }
    }

    return (
        <>
            <dialog className="modal" open={isOpen}>
                <header className="flex modal-header justify-between align-center vertical-center">
                    <button
                        onClick={() => navigateTo("connect")}
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
                <div className="modal-shadow" onClick={close}></div>
            ) : null}
        </>
    )
}
