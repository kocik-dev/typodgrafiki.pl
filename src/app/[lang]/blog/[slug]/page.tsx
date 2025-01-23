import BlogPostContent from "@/components/layout/PageBlogCard"
import { locales } from "@/i18n/settings"
import { getPostBySlug, getBlogPosts } from "@/lib/blog"
import { Locale } from "@/types/i18n"

// Generowanie ścieżek dla każdego języka
export async function generateStaticParams() {
    // Generujemy ścieżki dla każdej lokalizacji i każdego wpisu
    const allParams = []

    for (const locale of locales) {
        const posts = await getBlogPosts(locale) // Zakładamy, że funkcja obsługuje locale
        const params = posts.map((post) => ({
            lang: locale,
            slug: post.slug, // Dynamiczny segment slug
        }))
        allParams.push(...params)
    }

    return allParams
}

// // Metadane z uwzględnieniem języka
// export async function generateMetadata({
//     params,
// }: {
//     params: { lang: string; slug: string }
// }) {
//     const { lang, slug } = params
//     const post = await getPostBySlug(slug, lang) // zakładając, że getPostBySlug obsługuje język

//     if (!post) {
//         return {
//             title: "Post not found",
//         }
//     }

//     return {
//         title: `${post.title} - Blog - Grzegorz Kocik`,
//         description: post.description,
//     }
// }

export default async function BlogPostDefault({
    params,
}: {
    params: Promise<{ slug: string; lang: Locale }>
}) {
    return <BlogPostContent params={params} />
}
