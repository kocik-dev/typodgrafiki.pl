/**
 * Post - Komponent karty pojedynczego posta na liście blogowej
 *
 * Renderuje miniaturę posta blogowego zawierającą tagi, tytuł, opis oraz datę.
 * Wykorzystuje next-intl do internacjonalizacji i Next.js Link do nawigacji.
 *
 * @props
 * - post: BlogPostMetadata - Metadane posta zawierające:
 *   - slug: string - Unikalny identyfikator URL
 *   - title: string - Tytuł posta
 *   - description?: string - Opcjonalny opis
 *   - date: string - Data publikacji
 *   - tags?: string[] - Opcjonalne tagi
 *
 * @features
 * - Wyświetlanie tagów jako przycisków
 * - Formatowanie daty według locale en-US
 * - Linkowany tytuł i przycisk "Czytaj więcej"
 * - Responsywny układ
 *
 * @accessibility
 * - Semantyczna struktura article z header
 * - Prawidłowe użycie znacznika time z atrybutem dateTime
 * - Dostępna nawigacja przez linki
 *
 * @i18n
 * - Wykorzystuje przestrzeń nazw "blog" dla tłumaczeń
 * - Formatowanie daty według locale
 *
 * @example
 * ```jsx
 * <Post post={{
 *   slug: "przykładowy-post",
 *   title: "Tytuł posta",
 *   description: "Opis posta",
 *   date: "2024-01-08",
 *   tags: ["react", "nextjs"]
 * }} />
 * ```
 */

import { BlogPostMetadata } from "@/lib/blog"
import { getTranslationsSection } from "@/i18n/translations"
import Link from "next/link"
import React from "react"
import { Locale } from "@/types/i18n"

export default async function Post({
    post,
    locale,
}: {
    post: BlogPostMetadata
    locale: Locale
}) {
    const t = await getTranslationsSection("blog")
    const tags = post.tags || []

    const link = `${locale}/blog/${post.slug}`

    return (
        <article key={post.slug} className="post">
            <div className="tags">
                {tags.map((tag, index) => (
                    <button className="title-smaller" key={tag + index}>
                        {t.tags[tag as keyof typeof t.tags]}
                    </button>
                ))}
            </div>
            <header>
                <h2 className="name">
                    <Link href={link}>{post.title}</Link>
                </h2>
            </header>
            {post.description && (
                <p className="description text">{post.description}</p>
            )}
            <time dateTime={post.date} className="data">
                {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                })}
            </time>
            <div className="flex">
                <Link
                    href={link}
                    className="btn btn-transparent btn-bubble-bottom"
                >
                    <span>{t.postBtn}</span>
                </Link>
            </div>
        </article>
    )
}
