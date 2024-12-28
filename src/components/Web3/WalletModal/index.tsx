"use client"

import React from "react"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import { ConnectView } from "./components/ConnectView"
import { LiaAngleLeftSolid, LiaTimesSolid } from "react-icons/lia"
import InstallView from "./components/InstallView"
import DisconnectView from "./components/DisconnectView"
import "@/styles/modal.css"

export const WalletModal = () => {
    const { isOpen, view, close, goBack, canGoBack } = useWeb3Modal()

    const renderContent = () => {
        switch (view) {
            case "connect":
                return <ConnectView />
            case "install":
                return <InstallView />
            case "disconnect":
                return <DisconnectView />
        }
    }

    return (
        <>
            <div style={{ position: "fixed", top: 0, left: 0 }}>
                {isOpen ? "open" : "close"}
            </div>
            <dialog className="modal" open={isOpen}>
                <header className="flex modal-header justify-between align-center vertical-center">
                    {canGoBack && (
                        <button onClick={goBack}>
                            <LiaAngleLeftSolid />
                        </button>
                    )}
                    <div>title</div>
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
