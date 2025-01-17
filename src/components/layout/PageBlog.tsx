import { addLinkToTags, getBlogPosts, listTags } from "@/lib/blog"
import { fascinate } from "@/components/Fonts"
import Link from "next/link"
import Post from "@/components/Blog/Post"
import { getTranslationsSection } from "@/i18n/translations"
import { generateHref, getLangUrl } from "@/lib/i18n"

export default async function BlogContent({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>
}) {
    const t = await getTranslationsSection("blog")
    const posts = await getBlogPosts()
    const locale = await getLangUrl()

    const tags = addLinkToTags(listTags)

    const selectedTag = (await searchParams).tag || "all"

    const filteredPosts =
        selectedTag === "all"
            ? posts
            : posts.filter((post) => post.tags.includes(selectedTag))

    return (
        <main className="container">
            <h1 className={`title-small ${fascinate.className}`}>{t.title}</h1>
            <ul className="tags list-tags">
                <li>
                    <Link
                        href={await generateHref("/blog")}
                        className={`title-smaller ${
                            selectedTag === "all" ? "active" : ""
                        }`}
                    >
                        {t.all}
                    </Link>
                </li>
                {tags.map((item) => (
                    <li key={item.tag}>
                        <Link
                            href={`${locale}/blog?tag=${item.tag}`}
                            className={`title-smaller ${
                                selectedTag === item.tag ? "active" : ""
                            }`}
                        >
                            {item.tag}
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
                            locale={locale}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty-list text text-center flex justify-center">
                    <div>
                        <p>{t.listEmptyText}.</p>
                        <Link
                            href={await generateHref("/blog")}
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
