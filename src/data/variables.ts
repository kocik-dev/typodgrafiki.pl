/**
 * SITE_URL - Podstawowy URL strony
 *
 * Stała zawierająca główny adres URL strony, używana do generowania
 * pełnych adresów URL w całej aplikacji.
 *
 * @constant {string}
 * @default "https://kocik.dev"
 *
 * @usage
 * Używana do:
 * - Generowania mapy strony (sitemap)
 * - Budowania linków kanonicznych
 * - Tworzenia pełnych URL dla udostępniania
 * - Konfiguracji SEO
 *
 * @example
 * ```ts
 * import { SITE_URL } from '@/data/variables'
 *
 * // Generowanie pełnego URL
 * const postUrl = `${SITE_URL}/blog/post-slug`
 * ```
 */

export const SITE_URL = "https://kocik.dev"
