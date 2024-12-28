// import { createWalletClient, custom, WalletClient } from "viem"
// import { mainnet } from "viem/chains"

// let walletClient: WalletClient | null = null // Zmienna globalna przechowująca instancję klienta portfela.

// // Funkcja asynchroniczna zwracająca klienta portfela.
// export const getWalletClient = async () => {
//     // Jeśli klient portfela już istnieje (został wcześniej utworzony), zwracamy go.
//     if (walletClient) return walletClient

//     // Sprawdzamy, czy `window.ethereum` zawiera dostępne providery (np. dla MetaMask).
//     const provider = window.ethereum?.providers
//         ? window.ethereum.providers.find((p: any) => p.isMetaMask) // Jeśli jest wiele providerów, wybieramy MetaMask.
//         : window.ethereum // Jeśli nie ma wielu providerów, bierzemy domyślny.

//     // Jeśli żaden provider nie został znaleziony, zwracamy `null`.
//     if (!provider) return null

//     // Tworzymy nową instancję klienta portfela z wykorzystaniem znalezionego providera.
//     walletClient = createWalletClient({
//         chain: mainnet, // Konfigurujemy klienta dla sieci Ethereum Mainnet.
//         transport: custom(provider), // Ustawiamy transport, aby używać dostarczonego providera.
//     })

//     // Zwracamy klienta portfela.
//     return walletClient
// }
