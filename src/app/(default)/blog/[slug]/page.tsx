import BlogPostContent from "@/components/layout/PageBlogCard"
import { getPostBySlug, getBlogPosts } from "@/lib/blog"

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
    }
}

export default async function BlogPostDefault({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    return <BlogPostContent params={params} />
}
