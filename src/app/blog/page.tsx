import React from "react"
import "../../styles/blog.css"
import Link from "next/link"
import Image from "next/image"
import blog1 from "../../assets/blog/ecommerce-microinteractions.png"

const data = [
    {
        title: "Animowane mikrointerakcje w e-commerce: Jak wpływają na UX?",
        image: blog1,
        slug: "animowane-mikrointerakcje-w-ecommerce-jak-wplywaja-na-ux",
    },
]

export default async function Blog() {
    return (
        <div className="container">
            <h1>Blog</h1>
            <div className="blog-container">
                {data.map((post) => (
                    <Link
                        key={post.slug}
                        className="item"
                        href={`/blog/${post.slug}`}
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={350}
                            height={170}
                        />
                        <span className="title">{post.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
