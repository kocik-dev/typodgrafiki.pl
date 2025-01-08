/**
 * sitemap - Generator mapy strony (sitemap.xml)
 *
 * Generuje dynamiczną mapę strony XML dla wszystkich stron statycznych
 * oraz wpisów blogowych. Wykorzystuje Next.js Metadata API.
 *
 * @structure
 * Generuje następujące ścieżki:
 * - Strona główna (/) - najwyższy priorytet
 * - Strona bloga (/blog) - średni priorytet
 * - Posty blogowe (/blog/[slug]) - niższy priorytet
 *
 * @priorities
 * - Strona główna: 1.0
 * - Sekcja bloga: 0.8
 * - Pojedyncze posty: 0.6
 *
 * @changeFrequency
 * - Strona główna: monthly
 * - Sekcja bloga: weekly
 * - Posty blogowe: monthly
 *
 * @dependencies
 * - getBlogPosts - funkcja pobierająca listę postów
 * - SITE_URL - zmienna z bazowym URL strony
 *
 * @returns {Promise<MetadataRoute.Sitemap>}
 * Zwraca tablicę obiektów zgodnych z formatem sitemap,
 * zawierających URL, datę ostatniej modyfikacji,
 * częstotliwość zmian i priorytet.
 *
 * @example
 * // Automatycznie używany przez Next.js do generowania /sitemap.xml
 * // Przykładowy output:
 * [
 *   {
 *     url: "https://example.com",
 *     lastModified: "2024-01-08",
 *     changeFrequency: "monthly",
 *     priority: 1
 *   },
 *   ...
 * ]
 */

import { MetadataRoute } from "next"
import { getBlogPosts } from "@/lib/blog"
import { SITE_URL } from "@/data/variables"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getBlogPosts()

    const staticRoutes = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 1,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
    ]

    const blogRoutes = posts.map((post) => {
        return {
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }
    })

    const allRoutes = [...staticRoutes, ...blogRoutes]

    return allRoutes
}
