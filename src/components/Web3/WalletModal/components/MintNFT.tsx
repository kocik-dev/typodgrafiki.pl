"use client"
import { contractAdress } from "@/config/wagmi.config"
import { useState } from "react"
import { IoHammerOutline, IoRefreshOutline } from "react-icons/io5"
import {
    useAccount,
    useWriteContract,
    useChainId,
    useSwitchChain,
    useWaitForTransactionReceipt,
} from "wagmi"
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
    address: contractAdress,
    abi,
} as const

export default function MintButton() {
    const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const { address } = useAccount()
    const chainId = useChainId()
    const { switchChain } = useSwitchChain()

    const baseChain = sepolia.id //mainnet.id
    const isWrongNetwork = chainId !== baseChain

    const { writeContractAsync } = useWriteContract()

    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt(
        {
            hash: txHash,
        }
    )

    const changeChain = async () => {
        switchChain({ chainId: baseChain })
        return
    }

    const handleMint = async () => {
        try {
            setIsLoading(true)
            const hash = await writeContractAsync({
                ...contractConfig,
                functionName: "mint",
            })
            setTxHash(hash)
        } catch (err) {
            console.error("Minting failed:", err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-column gap-1">
            {isWrongNetwork && (
                <button
                    onClick={changeChain}
                    className="btn btn-default justify-center"
                >
                    <IoRefreshOutline />
                    Switch to Ethereum
                </button>
            )}
            <button
                onClick={handleMint}
                disabled={!address || isLoading || isSuccess || isWrongNetwork}
                className="btn btn-default wide-width justify-center"
            >
                <IoHammerOutline />
                {isLoading
                    ? "Waiting for wallet..."
                    : isConfirming
                    ? "Confirming..."
                    : isSuccess
                    ? "Minted!"
                    : "MINT FOR FREE"}
            </button>
        </div>
    )
}
