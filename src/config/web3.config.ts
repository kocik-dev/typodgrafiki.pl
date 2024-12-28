import { createPublicClient, createWalletClient, http, custom } from "viem"
import { mainnet } from "viem/chains"

export const CHAIN_ID = 1 // Mainnet
// export const CONTRACT_ADDRESS = '0x...'; // Your contract address
// export const CONTRACT_ABI = [...]; // Your contract ABI

export const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(),
})
