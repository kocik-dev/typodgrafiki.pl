"use client"

import {
    useAccount,
    useTransaction,
    usePublicClient,
    useWalletClient,
} from "wagmi"
import { writeContract } from "wagmi/actions"
import { parseEther } from "viem"
import { useState } from "react"
import { IoHammerOutline } from "react-icons/io5"

const CONTRACT_ADDRESS = "0xEb9ea800431966d550526B669766Fe6Ac6021C5A" // Adres kontraktu
const ABI = [
    {
        inputs: [],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]

export default function MintButton() {
    const { isConnected } = useAccount()
    const { data: walletClient } = useWalletClient()

    const [txHash, setTxHash] = useState<`0x${string}` | null>(null)
    // const { isLoading, isSuccess } = useTransaction({
    //     hash: txHash,
    // })

    const mintNFT = async () => {
        // if (!walletClient) return
        // try {
        //     const hash = await writeContract(walletClient, {
        //         address: CONTRACT_ADDRESS,
        //         abi: ABI,
        //         functionName: "mint",
        //         value: parseEther("0"), // Jeśli mint jest darmowy
        //     })
        //     setTxHash(hash)
        // } catch (error) {
        //     console.error("Minting failed:", error)
        // }
    }

    return (
        // <div>
        //     <button
        //         onClick={mintNFT}
        //         // disabled={!isConnected || isLoading}
        //         className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
        //     >
        //         {/* {isLoading ? "Minting..." : "Mint NFT"} */}
        //     </button>

        //     {/* {isSuccess && (
        //         <p className="text-green-500 mt-2">
        //             NFT Minted Successfully!
        //         </p>
        //     )} */}
        // </div>
        <button className="btn btn-default wide-width justify-center">
            <IoHammerOutline />
            MINT FOR FREE
        </button>
    )
}
