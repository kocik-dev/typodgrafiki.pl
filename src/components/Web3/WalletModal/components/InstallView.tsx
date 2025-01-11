"use client"

import React from "react"
import browserChrome from "@/assets/web3/browsers/chrome.svg"
import browserFirefox from "@/assets/web3/browsers/firefox.svg"
import browserEdge from "@/assets/web3/browsers/edge.svg"
import browserOpera from "@/assets/web3/browsers/opera.svg"
import Image from "next/image"
import Link from "next/link"
import iconMetamask from "@/assets/web3/wallets/metamask.svg"
import iconCoinbase from "@/assets/web3/wallets/coinbase.svg"
import { useTranslations } from "next-intl"

type BrowserInfo = {
    name: string
    icon: any
}

const getBrowserInfo = (): BrowserInfo => {
    const userAgent = navigator.userAgent.toLowerCase()

    if (userAgent.includes("firefox")) {
        return {
            name: "Firefox",
            icon: browserFirefox,
        }
    } else if (userAgent.includes("edg")) {
        return {
            name: "Edge",
            icon: browserEdge,
        }
    } else if (userAgent.includes("opr") || userAgent.includes("opera")) {
        return {
            name: "Opera",
            icon: browserOpera,
        }
    } else {
        // Domyślnie Chrome
        return {
            name: "Chrome",
            icon: browserChrome,
        }
    }
}

const WalletInstallView = ({
    walletName,
    walletIcon,
    installUrl,
    browserInfo,
}: {
    walletName: string
    walletIcon: any
    installUrl: string
    browserInfo: BrowserInfo
}) => {
    const t = useTranslations("web3")

    return (
        <div className="text-center">
            <Image
                src={walletIcon}
                alt={walletName}
                width={70}
                height={70}
                style={{ marginBottom: "10px" }}
            />
            <p className="modal-title">
                {t("install")} {walletName}
            </p>
            <p className="text">
                {t("installText1")} {walletName} {t("installText2")}
            </p>
            <div className="flex justify-center">
                <Link
                    href={installUrl}
                    target="_blank"
                    className="btn btn-transparent btn-bubble-bottom gap-1"
                >
                    <span className="flex vertical-center">
                        <Image
                            src={browserInfo.icon}
                            width={20}
                            height={20}
                            alt={`${browserInfo.name} browser`}
                        />
                        {t("installBtn")}
                    </span>
                </Link>
            </div>
        </div>
    )
}

export function InstallMetamaskView() {
    const browserInfo = getBrowserInfo()
    return (
        <WalletInstallView
            walletName="MetaMask"
            walletIcon={iconMetamask}
            installUrl="https://metamask.io/download/"
            browserInfo={browserInfo}
        />
    )
}

export function InstallCoinbaseView() {
    const browserInfo = getBrowserInfo()
    return (
        <WalletInstallView
            walletName="Coinbase Wallet"
            walletIcon={iconCoinbase}
            installUrl="https://www.coinbase.com/wallet/downloads"
            browserInfo={browserInfo}
        />
    )
}
