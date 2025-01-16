import BlogPostContent from "@/components/layout/PageBlogCard"
import { locales } from "@/i18n/settings"
import { getPostBySlug, getBlogPosts } from "@/lib/blog"

// Generowanie ścieżek dla każdego języka
export async function generateStaticParams() {
    const posts = await getBlogPosts()
    return locales.flatMap((locale) =>
        posts.map((post) => ({
            lang: locale,
            slug: post.slug,
        }))
    )
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
    params: Promise<{ slug: string; lang: string }>
}) {
    return <BlogPostContent params={params} />
}
