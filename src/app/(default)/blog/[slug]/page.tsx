import BlogPostContent from "@/components/layout/PageBlogCard"
import { defaultLocale, locales } from "@/i18n/settings"
import { getPostBySlug, getBlogPosts } from "@/lib/blog"
import { Locale } from "@/types/i18n"

// Generowanie statycznych ścieżek
export async function generateStaticParams() {
    const posts = await getBlogPosts(defaultLocale)
    const params = posts.map((post) => ({
        slug: post.slug,
    }))

    return params
}

// Generowanie metadanych
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const post = await getPostBySlug(slug, defaultLocale)

    if (!post) {
        return {
            title: "Post not found",
        }
    }

    return {
        title: `${post.title} - Blog - Grzegorz Kocik`,
        description: post.description,
    }
}

export default async function BlogPostDefault({
    params,
}: {
    params: Promise<{ slug: string; lang: Locale }>
}) {
    return <BlogPostContent params={params} />
}
