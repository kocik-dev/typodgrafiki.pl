// Drugi page.tsx
import BlogContent from "@/components/layout/PageBlog"

export async function generateStaticParams() {
    return [
        {
            slug: "blog",
        },
    ]
}

export default async function BlogPageDefault({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>
}) {
    return <BlogContent searchParams={searchParams} />
}
