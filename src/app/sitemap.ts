// app/sitemap.ts
import { MetadataRoute } from "next"
import { getBlogPosts } from "@/lib/blog"
import { SITE_URL } from "@/data/variables"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getBlogPosts()

    const staticRoutes = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 1,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
    ]

    const blogRoutes = posts.map((post) => {
        return {
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }
    })

    const allRoutes = [...staticRoutes, ...blogRoutes]

    return allRoutes
}
