"use client"

import React from "react"
import browserChrome from "@/assets/web3/browsers/chrome.svg"
import Image from "next/image"
import Link from "next/link"
import iconMetamask from "@/assets/web3/wallets/metamask.svg"

export default function InstallView() {
    return (
        <div className="text-center">
            <Image
                src={iconMetamask}
                alt="Metamask"
                width={70}
                height={70}
                style={{ marginBottom: "10px" }}
            />
            <p className="modal-title">Install MetaMask</p>
            <p className="text">
                To connect your MetaMask wallet, install the browser extension.
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
                        Install the Extension
                    </span>
                </Link>
            </div>
        </div>
    )
}
