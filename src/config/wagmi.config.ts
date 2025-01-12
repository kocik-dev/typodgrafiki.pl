import { http, createConfig } from "wagmi"
import { bsc, mainnet, sepolia } from "wagmi/chains"
import { coinbaseWallet, metaMask } from "wagmi/connectors"

export const config = createConfig({
    chains: [mainnet, sepolia, bsc],
    ssr: true,
    connectors: [
        metaMask(),
        coinbaseWallet({
            appName: "Twoja Aplikacja",
        }),
    ],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [bsc.id]: http(),
    },
})
