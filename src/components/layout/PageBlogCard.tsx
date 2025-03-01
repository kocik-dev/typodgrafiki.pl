// components/Blog/BlogPostContent.tsx
import { getPostBySlug, postExists } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import CodeSnippet from "@/components/Blog/CodeSnippet"
import { fascinate } from "@/components/Fonts"
import { defaultLocale } from "@/i18n/settings"
import { getTranslationsSection } from "@/i18n/translations"
import { Locale } from "@/types/i18n"

const components = {
    CodeSnippet,
}

export default async function BlogPostContent({
    params,
}: {
    params: Promise<{ slug: string; lang: Locale }>
}) {
    const slug = (await params).slug
    const locale = (await params).lang

    if (!(await postExists(slug, locale))) {
        notFound()
    }

    const t = await getTranslationsSection("blog")
    const post = await getPostBySlug(slug, locale)

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
                                {t.tags[tag as keyof typeof t.tags]}
                            </span>
                        ))}
                    </div>
                )}
                <h1 className={`title-small ${fascinate.className}`}>
                    {post.title}
                </h1>
                <time dateTime={post.date} className="data">
                    {new Date(post.date).toLocaleDateString(defaultLocale, {
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
