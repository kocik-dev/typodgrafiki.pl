"use client"

import { useAccount, useConnect } from "wagmi"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import Image from "next/image"
import { useTranslationsSection } from "@/hooks/useTranslations"

import iconWallet from "@/assets/web3/wallets/default.svg"
import iconMetamask from "@/assets/web3/wallets/metamask.svg"

export const ConnectView = () => {
    const { navigateTo } = useWeb3Modal()
    const { isConnecting } = useAccount()
    const { connect, connectors } = useConnect({
        mutation: {
            onSuccess(data) {
                navigateTo("success")
            },
            onError(error) {
                console.log(error.message)
                navigateTo("error", error.message)
            },
        },
    })

    const t = useTranslationsSection("web3")

    if (isConnecting) {
        return (
            <div className="flex flex-column vertical-center text-center">
                <ImageMetamaskBig />
                <p className="modal-title">{t.modalRequestTitle}</p>
                <p className="text">{t.modalRequestText}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-column gap-1">
            {connectors.map((connector) => (
                <button
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    className="flex vertical-center justify-between btn btn-transparent btn-wallet-connect btn-bubble-bottom"
                    disabled={isConnecting}
                >
                    <span style={{ width: "inherit" }}>
                        <span>{connector.name}</span>
                        {connector.icon && (
                            <img
                                src={connector.icon?.trimStart() || iconWallet}
                                alt={connector.name}
                                width={28}
                                height={28}
                                style={{ borderRadius: "5px" }}
                            />
                        )}
                    </span>
                </button>
            ))}
        </div>
    )
}

export const ImageMetamaskBig = () => {
    return (
        <Image
            src={iconMetamask}
            alt="Metamask"
            width={70}
            height={70}
            style={{ marginBottom: "10px" }}
        />
    )
}
