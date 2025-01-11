"use client"

import { useAccount, useEnsName } from "wagmi"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"
import { formatWalletAddress } from "@/lib/web3"
import { useTranslations } from "next-intl"

export const WalletButton = () => {
    const { address } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { open } = useWeb3Modal()

    const t = useTranslations("web3")

    const getButtonText = () => {
        if (address) {
            return ensName
                ? `${ensName} (${formatWalletAddress(address)})`
                : formatWalletAddress(address)
        }
        return t("btnConnectWeb3")
    }

    const handleClick = () => {
        open(address ? "success" : "connect")
    }

    return (
        <div className="menu-web3 relative">
            <button className="btn btn-default" onClick={handleClick}>
                {getButtonText()}
            </button>
        </div>
    )
}
