/**
 * BlogPost - Komponent strony pojedynczego wpisu blogowego
 *
 * Odpowiada za renderowanie pojedynczego postu blogowego z obsługą MDX.
 * Implementuje statyczne generowanie ścieżek (SSG) oraz dynamiczne metadane.
 * Obsługuje sytuacje błędów i brakujących postów.
 *
 * @features
 * - Renderowanie contentu MDX z niestandardowymi komponentami
 * - Statyczne generowanie ścieżek dla lepszej wydajności
 * - Dynamiczne metadane SEO
 * - Formatowanie daty według locale pl-PL
 * - Wyświetlanie tagów
 * - Obsługa błędów 404
 *
 * @dependencies
 * - next-mdx-remote - renderowanie MDX
 * - lib/blog - funkcje dostępu do danych (getPostBySlug, postExists, getBlogPosts)
 * - CodeSnippet - komponent do wyświetlania kodu
 * - fascinate - font
 *
 * @staticGeneration
 * - generateStaticParams - generuje statyczne ścieżki dla wszystkich postów
 * - generateMetadata - generuje dynamiczne metadane dla każdego posta
 *
 * @structure
 * - article.blog-post
 *   - header (meta informacje posta)
 *     - tagi
 *     - tytuł
 *     - data
 *   - content (treść MDX)
 *
 * @param {Promise<{slug: string}>} params - Parametry ścieżki z Next.js
 *
 * @example
 * // Automatycznie renderowany przez Next.js dla ścieżki /blog/[slug]
 * <BlogPost params={{ slug: "nazwa-posta" }} />
 */

import { getPostBySlug, postExists, getBlogPosts } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import CodeSnippet from "@/components/Blog/CodeSnippet"
import { fascinate } from "@/components/Fonts"

// export const metadata = {
//     title: "Blog - Grzegorz Kocik",
//     description: "Frontend development blog",
// }

// Definiujemy komponenty dostępne w MDX
const components = {
    CodeSnippet,
    // Możesz dodać więcej komponentów tutaj
}

// Generowanie statycznych ścieżek
export async function generateStaticParams() {
    const posts = await getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

// Generowanie metadanych
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const post = await getPostBySlug(slug)

    if (!post) {
        return {
            title: "Post not found",
        }
    }

    return {
        title: `${post.title} - Blog - Grzegorz Kocik`,
        description: post.description,
        // Możesz dodać więcej metadanych jak OpenGraph itp.
    }
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    // Sprawdź czy post istnieje
    if (!(await postExists(slug))) {
        notFound()
    }

    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="blog-post container">
            <header>
                {post.tags && (
                    <div className="tags">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="title-smaller"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <h1 className={`title-small ${fascinate.className}`}>
                    {post.title}
                </h1>
                <time
                    dateTime={post.date}
                    className="data"
                >
                    {new Date(post.date).toLocaleDateString("pl-PL", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
            </header>

            <div className="content text">
                <MDXRemote
                    source={post.content}
                    components={components}
                />
            </div>
        </article>
    )
}
