// app/sitemap.ts
import { MetadataRoute } from "next"
import { getBlogPosts } from "@/lib/blog"
import { url } from "@/app/layout"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getBlogPosts()

    const staticRoutes = [
        {
            url: url,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 1,
        },
        {
            url: `${url}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
    ]

    const blogRoutes = posts.map((post) => {
        return {
            url: `${url}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }
    })

    const allRoutes = [...staticRoutes, ...blogRoutes]

    return allRoutes
}
