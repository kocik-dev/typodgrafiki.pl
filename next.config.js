/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "olive-negative-wildcat-303.mypinata.cloud",
                pathname: "/ipfs/**", // Dostosuj, jeśli masz konkretną ścieżkę
            },
        ],
        dangerouslyAllowSVG: true, // Pozwala na ładowanie plików SVG (domyślnie wyłączone)
        contentSecurityPolicy: "default-src 'self'; img-src * data: blob:;",
    },
}

// Kompozycja wielu pluginów
module.exports = nextConfig
