"use client"

import React from "react"
import browserChrome from "@/assets/web3/browsers/chrome.svg"
import Image from "next/image"
import Link from "next/link"
import iconMetamask from "@/assets/web3/wallets/metamask.svg"
import { useTranslationsSection } from "@/hooks/useTranslations"

export default function InstallView() {
    const t = useTranslationsSection("web3")
    return (
        <div className="text-center">
            <Image
                src={iconMetamask}
                alt="Metamask"
                width={70}
                height={70}
                style={{ marginBottom: "10px" }}
            />
            <p className="modal-title">{t.install} MetaMask</p>
            <p className="text">
                {t.installText1} MetaMask {t.installText2}
            </p>
            <div className="flex justify-center">
                <Link
                    href="https://metamask.io/download/"
                    target="_blank"
                    className="btn btn-transparent btn-bubble-bottom gap-1"
                >
                    <span className="flex vertical-center">
                        <Image
                            src={browserChrome}
                            width={20}
                            height={20}
                            alt="Chrome browser"
                        />
                        {t.installBtn}
                    </span>
                </Link>
            </div>
        </div>
    )
}
