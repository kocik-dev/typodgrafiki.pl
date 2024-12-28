// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import iconMetamask from "@/assets/web3/wallets/metamask.svg"
// import iconCoinbase from "@/assets/web3/wallets/coinbase.svg"
// import browserChrome from "@/assets/web3/browsers/chrome.svg"
// // import { useModal, useWallet } from "@/hooks/---useContext"
// import { createWalletClient, custom } from "viem"
// import { mainnet } from "viem/chains"
// import Link from "next/link"

// declare global {
//     interface Window {
//         ethereum: any
//     }
// }

// function WalletNotInstalled({
//     walletName,
//     installUrl,
// }: {
//     walletName: string
//     installUrl: string
// }) {
//     return (
//         <div className="text-center">
//             <p className="modal-title">Install {walletName}</p>
//             <p className="text">
//                 To connect your {walletName} wallet, install the browser
//                 extension.
//             </p>
//             <div className="flex justify-center">
//                 <Link
//                     href={installUrl}
//                     target="_blank"
//                     className="btn btn-transparent btn-bubble-bottom gap-1"
//                 >
//                     <span className="flex vertical-center">
//                         <Image
//                             src={browserChrome}
//                             width={20}
//                             height={20}
//                             alt="Chrome browser"
//                         />
//                         Install the Extension
//                     </span>
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export function WalletContent() {
//     const { openModal } = useModal()
//     const { address, setWalletAddress, connect } = useWallet()

//     const connectMetamask = async () => {
//         if (!window.ethereum?.providers && !window.ethereum?.isMetaMask) {
//             openModal({
//                 title: "MetaMask",
//                 content: (
//                     <WalletNotInstalled
//                         walletName="MetaMask"
//                         installUrl="https://metamask.io/download/"
//                     />
//                 ),
//             })
//             return
//         }

//         try {
//             // Znajdź provider MetaMaska
//             const provider = window.ethereum?.providers
//                 ? window.ethereum.providers.find((p: any) => p.isMetaMask)
//                 : window.ethereum

//             const client = createWalletClient({
//                 chain: mainnet,
//                 transport: custom(provider),
//             })

//             const [account] = await client.requestAddresses()

//             setWalletAddress(account)
//             connect("metamask")
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     // const connectCoinbase = async () => {
//     //     if (typeof window.ethereum?.isCoinbaseWallet === "undefined") {
//     //         openModal({
//     //             title: "Install Coinbase Wallet",
//     //             content: (
//     //                 <WalletNotInstalled
//     //                     walletName="Coinbase Wallet"
//     //                     installUrl="https://www.coinbase.com/wallet"
//     //                 />
//     //             ),
//     //         })
//     //         return
//     //     }

//     //     // Similar connection logic as MetaMask
//     // }

//     return (
//         <>
//             <button
//                 className="flex vertical-center justify-between btn btn-transparent btn-wallet-connect btn-bubble-bottom"
//                 onClick={connectMetamask}
//             >
//                 <span style={{ width: "inherit" }}>
//                     MetaMask
//                     <Image
//                         src={iconMetamask}
//                         alt="Metamask"
//                         width={32}
//                         height={32}
//                     />
//                 </span>
//             </button>
//             {/* <button
//                 className="btn flex vertical-center justify-between"
//                 onClick={connectCoinbase}
//             >
//                 Coinbase Wallet
//                 <Image
//                     src={iconCoinbase}
//                     alt="Coinbase Wallet"
//                     width={32}
//                     height={32}
//                     style={{ borderRadius: "6px" }}
//                 />
//             </button> */}
//         </>
//     )
// }
