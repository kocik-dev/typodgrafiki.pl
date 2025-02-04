"use client"
import { useState } from "react"
import { IoHammerOutline } from "react-icons/io5"
import { useAccount, useWriteContract, useChainId, useSwitchChain } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"

const abi = [
    {
        name: "mint",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [],
        outputs: [],
    },
] as const

const contractConfig = {
    address: "0xEb9ea800431966d550526B669766Fe6Ac6021C5A",
    abi,
} as const

export default function MintButton() {
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { address } = useAccount()
    const chainId = useChainId()
    const { switchChain } = useSwitchChain()

    const baseChain = sepolia.id //mainnet.id

    const isWrongNetwork = chainId !== baseChain

    const { writeContract } = useWriteContract()

    const handleMint = async () => {
        if (isWrongNetwork) {
            await switchChain({ chainId: baseChain })
            return
        }

        try {
            setIsLoading(true)
            await writeContract({
                ...contractConfig,
                functionName: "mint",
            })
            setIsSuccess(true)
        } catch (err) {
            console.error("Minting failed:", err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex gap-1">
            <button className="btn btn-default">
                {isWrongNetwork ? "Switch to Ethereum" : "is Ethereum"}
            </button>

            <button
                onClick={handleMint}
                disabled={!address || isLoading || isSuccess || isWrongNetwork}
                className="btn btn-default wide-width justify-center"
            >
                <IoHammerOutline />
                {isLoading
                    ? "Minting..."
                    : isSuccess
                    ? "Minted!"
                    : "MINT FOR FREE"}
            </button>
        </div>
    )
}
