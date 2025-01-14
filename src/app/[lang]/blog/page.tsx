/**
 * BlogPage - Strona bloga z filtrowaniem po tagach
 *
 * Komponent renderuje listę postów blogowych z możliwością filtrowania po tagach.
 * Obsługuje server-side rendering i dynamiczne filtrowanie postów.
 * Wykorzystuje internacjonalizację do tłumaczeń interfejsu.
 *
 * @metadata
 * - Ustawia własne meta tagi dla SEO
 * - Używa niestandardowego fontu (fascinate)
 *
 * @features
 * - Filtrowanie postów po tagach poprzez parametry URL
 * - Responsywna lista postów
 * - Stan pustej listy z komunikatem
 * - Server-side rendering dla lepszej wydajności
 *
 * @params
 * - searchParams: {tag?: string} - Parametry URL do filtrowania (np. ?tag=javascript)
 *
 * @dependencies
 * - getBlogPosts - Funkcja pobierająca posty
 * - listTags - Lista dostępnych tagów
 * - next-intl - Internacjonalizacja
 * - Post - Komponent pojedynczego posta
 *
 * @i18n
 * - Wykorzystuje namespace "blog"
 * - Tłumaczone: tytuł, "wszystkie", komunikat pustej listy, przycisk
 *
 * @example
 * // Automatycznie renderowany przez Next.js dla ścieżki /blog
 * <BlogPage searchParams={{ tag: "javascript" }} />
 */

import { getBlogPosts, listTags } from "@/lib/blog"
import { fascinate } from "@/components/Fonts"
import Link from "next/link"
import Post from "@/components/Blog/Post"
import { Metadata } from "next"
// import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

export const metadata: Metadata = {
    title: "Blog - Grzegorz Kocik",
    description: "Frontend development blog",
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>
}) {
    // const t = useTranslations("blog")
    const t = await getTranslations("blog")
    const posts = await getBlogPosts()
    const tags = listTags

    // Pobierz tag z URL-a, np. ?tag=javascript
    const selectedTag = (await searchParams).tag || "all"

    // Filtrowanie po stronie serwera
    const filteredPosts =
        selectedTag === "all"
            ? posts
            : posts.filter((post) => post.tags.includes(selectedTag))

    return (
        <main className="container">
            <h1 className={`title-small ${fascinate.className}`}>
                {t("title")}
            </h1>
            <ul className="tags list-tags">
                <li>
                    <Link
                        href="/blog"
                        className={`title-smaller ${
                            selectedTag === "all" ? "active" : ""
                        }`}
                    >
                        {t("all")}
                    </Link>
                </li>
                {tags.map((tag) => (
                    <li key={tag}>
                        <Link
                            href={`/blog?tag=${tag}`}
                            className={`title-smaller ${
                                selectedTag === tag ? "active" : ""
                            }`}
                        >
                            {tag}
                        </Link>
                    </li>
                ))}
            </ul>

            {filteredPosts.length > 0 ? (
                <div className="posts-list">
                    {filteredPosts.map((post) => (
                        <Post
                            post={post}
                            key={post.slug}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty-list text text-center flex justify-center">
                    <div>
                        <p>{t("listEmptyText")}.</p>
                        <Link
                            href="/blog"
                            className="btn btn-default"
                        >
                            {t("seeAllPosts")}
                        </Link>
                    </div>
                </div>
            )}
        </main>
    )
}
