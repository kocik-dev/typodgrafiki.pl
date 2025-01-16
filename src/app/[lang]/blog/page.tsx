// Drugi page.tsx
import BlogContent from "@/components/layout/PageBlog"

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>
}) {
    return <BlogContent searchParams={searchParams} />
}
