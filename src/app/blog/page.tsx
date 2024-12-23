// import React from "react"
// import "../../styles/blog.css"
// import Link from "next/link"
// import Image from "next/image"
// import blog1 from "../../assets/blog/ecommerce-microinteractions.png"

// const data = [
//     {
//         title: "Animowane mikrointerakcje w e-commerce: Jak wpływają na UX?",
//         image: blog1,
//         slug: "animowane-mikrointerakcje-w-ecommerce-jak-wplywaja-na-ux",
//     },
// ]

// export default async function Blog() {
//     return (
//         <div className="container">
//             <h1>Blog</h1>
//             <div className="blog-container">
//                 {data.map((post) => (
//                     <Link
//                         key={post.slug}
//                         className="item"
//                         href={`/blog/${post.slug}`}
//                     >
//                         <Image
//                             src={post.image}
//                             alt={post.title}
//                             width={350}
//                             height={170}
//                         />
//                         <span className="title">{post.title}</span>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }

import { getBlogPosts } from "@/lib/blog"
import Link from "next/link"

export const metadata = {
    title: "Blog - Grzegorz Kocik",
    description: "Frontend development blog",
}

export default async function BlogPage() {
    const posts = await getBlogPosts()

    return (
        <main className="container">
            <h1>Blog</h1>
            <div className="posts-grid">
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="post-card"
                    >
                        <h2>
                            <Link href={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </h2>
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("pl-PL", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                        {/* {post.description && <p>{post.description}</p>} */}
                    </article>
                ))}
            </div>
        </main>
    )
}
