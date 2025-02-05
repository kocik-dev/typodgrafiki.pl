// import { createPublicClient, createWalletClient, http, custom } from "viem"
// import { mainnet } from "viem/chains"

// export const CHAIN_ID = 1 // Mainnet
// // export const CONTRACT_ADDRESS = '0x...'; // Your contract address
// // export const CONTRACT_ABI = [...]; // Your contract ABI

// export const publicClient = createPublicClient({
//     chain: mainnet,
//     transport: http(),
// })

import { http, createConfig } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"

export const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    },
})

export const contractAdress = "0xEb9ea800431966d550526B669766Fe6Ac6021C5A"

export const nftImage =
    "https://olive-negative-wildcat-303.mypinata.cloud/ipfs/bafkreihi7axbr33hluqkdkqdur5zsropzc4ojgjf3adkx75x3fajlvglwa"
