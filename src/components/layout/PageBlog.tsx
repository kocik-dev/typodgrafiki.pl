import { addLinkToTags, getBlogPosts } from "@/lib/blog"
import { fascinate } from "@/components/Fonts"
import Link from "next/link"
import Post from "@/components/Blog/Post"
import { getTranslationsSection } from "@/i18n/translations"
import { getLangUrl } from "@/lib/i18n"
import { TagId } from "@/types/website"

export default async function BlogContent({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>
}) {
    const t = await getTranslationsSection("blog")
    const locale = await getLangUrl()
    const posts = await getBlogPosts()

    const tags = addLinkToTags()

    const selectedTagId = ((await searchParams).tag || "all") as TagId | "all"

    const filteredPosts =
        selectedTagId === "all"
            ? posts
            : posts.filter((post) => post.tags.includes(selectedTagId))

    return (
        <main className="container">
            <h1 className={`title-small ${fascinate.className}`}>{t.title}</h1>
            <ul className="tags list-tags">
                <li>
                    <Link
                        href={locale + "/blog"}
                        className={`title-smaller ${
                            selectedTagId === "all" ? "active" : ""
                        }`}
                    >
                        {t.all}
                    </Link>
                </li>
                {tags.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={`${locale}/blog?tag=${item.id}`}
                            className={`title-smaller ${
                                selectedTagId === item.id ? "active" : ""
                            }`}
                        >
                            {t.tags[item.id as keyof typeof t.tags]}
                        </Link>
                    </li>
                ))}
            </ul>

            {filteredPosts.length > 0 ? (
                <div className="posts-list">
                    {filteredPosts.map((post) => (
                        <Post post={post} key={post.slug} locale={locale} />
                    ))}
                </div>
            ) : (
                <div className="empty-list text text-center flex justify-center">
                    <div>
                        <p>{t.listEmptyText}.</p>
                        <Link
                            href={locale + "/blog"}
                            className="btn btn-default"
                        >
                            {t.seeAllPosts}
                        </Link>
                    </div>
                </div>
            )}
        </main>
    )
}
