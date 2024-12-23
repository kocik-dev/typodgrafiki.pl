import { getBlogPosts } from "@/lib/blog"
import Link from "next/link"
import { fascinate } from "@/components/Fonts"

export const metadata = {
    title: "Blog - Grzegorz Kocik",
    description: "Frontend development blog",
}

export default async function BlogPage() {
    const posts = await getBlogPosts()

    return (
        <main className="container">
            <h1 className={`title-small ${fascinate.className}`}>Blog</h1>
            <div className="posts-grid">
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="post-card"
                    >
                        <header>
                            <h2>
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString(
                                    "pl-PL",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </time>
                        </header>
                        {post.description && <p>{post.description}</p>}
                    </article>
                ))}
            </div>
        </main>
    )
}
