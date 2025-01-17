// Drugi page.tsx
import BlogContent from "@/components/layout/PageBlog"

export default async function BlogPageDefault({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>
}) {
    return <BlogContent searchParams={searchParams} />
}
