import { getBlogPosts, listTags } from "@/lib/blog"
import { fascinate } from "@/components/Fonts"
import Link from "next/link"
import Post from "@/components/Blog/Post"

export const metadata = {
    title: "Blog - Grzegorz Kocik",
    description: "Frontend development blog",
}

export default async function BlogPage({ searchParams }) {
    const posts = await getBlogPosts()
    const tags = listTags

    // Pobierz tag z URL-a, np. ?tag=javascript
    const selectedTag = searchParams.tag || "all"

    // Filtrowanie po stronie serwera
    const filteredPosts =
        selectedTag === "all"
            ? posts
            : posts.filter((post) => post.tags.includes(selectedTag))

    return (
        <main className="container">
            <h1 className={`title-small ${fascinate.className}`}>Blog</h1>
            <ul className="tags list-tags">
                <li>
                    <Link
                        href="/blog"
                        className={`title-smaller ${
                            selectedTag === "all" ? "active" : ""
                        }`}
                    >
                        all
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
            <div className="posts-list">
                {filteredPosts.map((post) => (
                    <Post post={post} key={post.slug} />
                ))}
            </div>
        </main>
    )
}
