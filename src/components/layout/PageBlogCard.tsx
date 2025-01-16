// components/Blog/BlogPostContent.tsx
import { getPostBySlug, postExists } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import CodeSnippet from "@/components/Blog/CodeSnippet"
import { fascinate } from "@/components/Fonts"
import { defaultLocale } from "@/i18n/settings"

const components = {
    CodeSnippet,
}

export default async function BlogPostContent({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

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
                            <span
                                key={tag}
                                className="title-smaller"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <h1 className={`title-small ${fascinate.className}`}>
                    {post.title}
                </h1>
                <time
                    dateTime={post.date}
                    className="data"
                >
                    {new Date(post.date).toLocaleDateString(defaultLocale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
            </header>

            <div className="content text">
                <MDXRemote
                    source={post.content}
                    components={components}
                />
            </div>
        </article>
    )
}
