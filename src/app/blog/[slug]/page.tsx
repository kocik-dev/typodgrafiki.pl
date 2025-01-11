import { getPostBySlug, postExists, getBlogPosts } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import CodeSnippet from "@/components/Blog/CodeSnippet"
import { fascinate } from "@/components/layout/Fonts"

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
                            <span key={tag} className="title-smaller">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <h1 className={`title-small ${fascinate.className}`}>
                    {post.title}
                </h1>
                <time dateTime={post.date} className="data">
                    {new Date(post.date).toLocaleDateString("pl-PL", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
            </header>

            <div className="content text">
                <MDXRemote source={post.content} components={components} />
            </div>
        </article>
    )
}
