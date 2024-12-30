import { BlogPostMetadata } from "@/lib/blog"
import { useTranslations } from "next-intl"
import Link from "next/link"
import React from "react"

export default function Post({ post }: { post: BlogPostMetadata }) {
    const tags = post.tags || []
    const link = `/blog/${post.slug}`
    const t = useTranslations("blog")
    return (
        <article
            key={post.slug}
            className="post"
        >
            <div className="tags">
                {tags.map((tag, index) => (
                    <button
                        className="title-smaller"
                        key={tag + index}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <header>
                <h2 className="name">
                    <Link href={link}>{post.title}</Link>
                </h2>
            </header>
            {post.description && (
                <p className="description text">{post.description}</p>
            )}
            <time
                dateTime={post.date}
                className="data"
            >
                {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                })}
            </time>
            <div className="flex">
                <Link
                    href={link}
                    className="btn btn-transparent btn-bubble-bottom"
                >
                    <span>{t("postBtn")}</span>
                </Link>
            </div>
        </article>
    )
}
