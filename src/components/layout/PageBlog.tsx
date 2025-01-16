import { getBlogPosts, listTags } from "@/lib/blog"
import { fascinate } from "@/components/Fonts"
import Link from "next/link"
import Post from "@/components/Blog/Post"
import { getTranslations } from "next-intl/server"

export default async function BlogContent({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>
}) {
    const t = await getTranslations("blog")
    const posts = await getBlogPosts()
    const tags = listTags

    const selectedTag = (await searchParams).tag || "all"

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
