"use client"
import { contractAdress, nftImage } from "@/config/wagmi.config"
import Image from "next/image"
import { useState } from "react"
import {
    IoHammerOutline,
    IoRefreshOutline,
    IoCheckmarkCircleOutline,
} from "react-icons/io5"
import {
    useAccount,
    useWriteContract,
    useChainId,
    useSwitchChain,
    useWaitForTransactionReceipt,
    useReadContract,
} from "wagmi"
import { arbitrum } from "wagmi/chains"

const abi = [
    {
        name: "mint",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [],
        outputs: [],
    },
    {
        name: "totalMinted",
        type: "function",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint256" }],
    },
    {
        name: "maxSupply",
        type: "function",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint256" }],
    },
] as const

const contractConfig = {
    address: contractAdress,
    abi,
} as const

export default function MintView() {
    const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const { address } = useAccount()
    const chainId = useChainId()
    const { switchChain } = useSwitchChain()

    const baseChain = arbitrum.id
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
        <div className="flex flex-column vertical-center">
            <div className="nft-image-wallet">
                <Image
                    src={nftImage}
                    alt="Blocky Brain #1"
                    height={100}
                    width={100}
                />
            </div>
            <div className="flex flex-column gap-1 wide-width">
                <div className="flex flex-column gap-1">
                    {isWrongNetwork ? (
                        <button
                            onClick={changeChain}
                            className="btn btn-default justify-center"
                        >
                            <IoRefreshOutline />
                            Switch to Arbitrum
                        </button>
                    ) : (
                        !isSuccess && <CheckAvailible />
                    )}

                    {isSuccess ? (
                        <SuccessInfo />
                    ) : (
                        <button
                            onClick={handleMint}
                            disabled={
                                !address ||
                                isLoading ||
                                isWrongNetwork ||
                                isConfirming
                            }
                            className="btn btn-default wide-width justify-center"
                        >
                            <IoHammerOutline />
                            {isLoading
                                ? "Waiting for wallet..."
                                : isConfirming
                                ? "Confirming..."
                                : "MINT FOR FREE"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

const CheckAvailible = () => {
    const { data: totalMinted } = useReadContract({
        ...contractConfig,
        functionName: "totalMinted",
    })

    const { data: maxSupply } = useReadContract({
        ...contractConfig,
        functionName: "maxSupply",
    })

    const remainingNFTs = maxSupply && totalMinted ? maxSupply - totalMinted : 0

    return (
        <div className="flex wide-width gap-1">
            <span className="flex-grow">Pozostało:</span>
            <span>
                {remainingNFTs} / {maxSupply}
            </span>
        </div>
    )
}

const SuccessInfo = () => {
    return (
        <div className="nft-success-text flex flex-column gap-1 vertical-center text-center">
            <div className="flex">
                <IoCheckmarkCircleOutline color="#02bb4c" />
                <strong>Minted!</strong>
            </div>
            <div style={{ marginTop: "10px" }}>Contract adress:</div>
            <div>{contractAdress}</div>
        </div>
    )
}
