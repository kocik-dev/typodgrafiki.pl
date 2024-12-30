"use client"

import { useWallet } from "@/contexts/WalletContext"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import Image from "next/image"
import iconMetamask from "@/assets/web3/wallets/metamask.svg"
import { useTranslations } from "next-intl"

export const ConnectView = () => {
    const { connect, isConnecting, walletType } = useWallet()
    const { navigateTo } = useWeb3Modal()
    const t = useTranslations("web3")

    const handleMetamaskConnect = async () => {
        if (!window.ethereum?.providers && !window.ethereum?.isMetaMask) {
            navigateTo("install")
            return
        }
        const result = await connect("metamask")
        if (result.success) {
            navigateTo("success")
        } else {
            navigateTo("error", result.message)
        }
    }

    if (isConnecting) {
        return (
            <div className="flex flex-column vertical-center text-center">
                <ImageMetamaskBig />
                <p className="modal-title">{t("modalRequestTitle")}</p>
                <p className="text">{t("modalRequestText")}</p>
            </div>
        )
    }

    return (
        <button
            className="flex vertical-center justify-between btn btn-transparent btn-wallet-connect btn-bubble-bottom"
            onClick={handleMetamaskConnect}
            disabled={isConnecting}
        >
            <span style={{ width: "inherit" }}>
                <span>
                    MetaMask
                    {walletType ? (
                        <small>({t("modalRequestRecent")})</small>
                    ) : null}
                </span>
                <Image
                    src={iconMetamask}
                    alt="Metamask"
                    width={32}
                    height={32}
                />
            </span>
        </button>
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
