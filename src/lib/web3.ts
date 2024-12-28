export const formatWalletAddress = (address: string) => {
    const dots = "...."
    if (!address || address.length < 10) {
        return "Invalid address"
    }
    return `${address.slice(0, 6) + dots + address.slice(-4)}`
}
