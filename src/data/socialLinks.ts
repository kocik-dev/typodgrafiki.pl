/**
 * Konfiguracja linków do mediów społecznościowych
 *
 * Eksportuje obiekt zawierający adresy URL do profili w mediach społecznościowych.
 * Wykorzystuje interfejs PropsSocialLinks do zapewnienia poprawności typów.
 *
 * @type {PropsSocialLinks}
 * Obiekt zawierający linki do:
 * - Instagram
 * - LinkedIn
 * - X (formerly Twitter)
 * - GitHub
 *
 * @constant
 * Stała konfiguracja używana w całej aplikacji.
 *
 * @usage
 * @example
 * import { socialLinks } from '@/data/links'
 *
 * // Użycie pojedynczego linku
 * <a href={socialLinks.github}>GitHub</a>
 *
 * // Iteracja po linkach
 * Object.entries(socialLinks).map(([platform, url]) => (
 *   <a key={platform} href={url}>{platform}</a>
 * ))
 */

import { PropsSocialLinks } from "@/types/website"

export const socialLinks: PropsSocialLinks = {
    instagram: "https://www.instagram.com/kocik.dev/",
    linkedin: "https://linkedin.com/in/kocik-dev/",
    x: "https://www.x.com/kocik_dev/",
    github: "https://github.com/kocik-dev/",
}
