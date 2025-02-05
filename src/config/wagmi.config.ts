import { http, createConfig } from "wagmi"
import { mainnet, arbitrum } from "wagmi/chains"

export const config = createConfig({
    chains: [mainnet, arbitrum],
    transports: {
        [mainnet.id]: http(),
        [arbitrum.id]: http(),
    },
})

export const contractAdress = "0xb66c26e69a13880cb4bff30509455591d2c8d058"

export const nftImage =
    "https://olive-negative-wildcat-303.mypinata.cloud/ipfs/bafkreihi7axbr33hluqkdkqdur5zsropzc4ojgjf3adkx75x3fajlvglwa"
