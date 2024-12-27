export function formatWalletAddress(address: string) {
    const dots = "&#9679;&#9679;&#9679;&#9679;"
    if (!address || address.length < 10) {
        return "Invalid address"
    }
    return `${address.slice(0, 6) + dots + address.slice(-4)}`
}
