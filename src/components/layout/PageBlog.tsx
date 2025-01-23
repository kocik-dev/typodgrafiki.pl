import { addLinkToTags, getBlogPosts } from "@/lib/blog"
import { fascinate } from "@/components/Fonts"
import Link from "next/link"
import Post from "@/components/Blog/Post"
import { getTranslationsSection } from "@/i18n/translations"
import { TagId } from "@/types/website"
import { Locale } from "@/types/i18n"
import { defaultLocale } from "@/i18n/settings"
import { getLangUrl } from "@/lib/i18n"

export default async function BlogContent({
    searchParams,
    params,
}: {
    searchParams: Promise<{ tag?: string }>
    params?: Promise<{ lang: Locale }>
}) {
    const t = await getTranslationsSection("blog")

    const lang = (await params)?.lang
    const locale = await getLangUrl(lang)

    const posts = await getBlogPosts(locale)

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
