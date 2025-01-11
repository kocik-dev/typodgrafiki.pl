import { http, createConfig } from "wagmi"
import { bsc, base, mainnet, sepolia } from "wagmi/chains"
import { coinbaseWallet, metaMask } from "wagmi/connectors"

// const projectId = "<WALLETCONNECT_PROJECT_ID>"

export const config = createConfig({
    chains: [mainnet, sepolia, bsc],
    ssr: true,
    connectors: [
        // injected(),
        // walletConnect({ projectId }),
        metaMask(),
        coinbaseWallet({
            appName: "Twoja Aplikacja",
        }),
        // safe()
    ],
    transports: {
        [mainnet.id]: http(),
        // [base.id]: http(),
        [sepolia.id]: http(),
        [bsc.id]: http(),
    },
})
