import { BlogPostMetadata } from "@/lib/blog"
import Link from "next/link"
import React from "react"

export default function Post({ post }: { post: BlogPostMetadata }) {
    const tags = post.tags || []
    return (
        <article key={post.slug} className="post">
            <div className="tags">
                {tags.map((tag) => (
                    <button className="title-smaller">{tag}</button>
                ))}
            </div>
            <header>
                <h2 className="name">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
            </header>
            {post.description && (
                <p className="description text">{post.description}</p>
            )}
            <time dateTime={post.date} className="data">
                {new Date(post.date).toLocaleDateString("pl-PL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </time>
        </article>
    )
}
