// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     i18n: {
//         locales: ["en", "pl", "es"], // Dodaj tutaj wszystkie obsługiwane języki
//         defaultLocale: "en", // Ustaw 'en' jako domyślny język
//         localeDetection: true, // Włącz automatyczne wykrywanie języka przeglądarki
//     },
// }

// module.exports = nextConfig

// const createNextIntlPlugin = require("next-intl/plugin")

// const withNextIntl = createNextIntlPlugin()

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = withNextIntl(nextConfig)

const createNextIntlPlugin = require("next-intl/plugin")

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withNextIntl(nextConfig)
