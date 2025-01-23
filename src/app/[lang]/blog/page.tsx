import BlogContent from "@/components/layout/PageBlog"
import { locales } from "@/i18n/settings"
import { Locale } from "@/types/i18n"

export async function generateStaticParams() {
    const params = locales.map((locale) => ({
        lang: locale,
    }))
    return params
}

export default async function BlogPage({
    searchParams,
    params,
}: {
    searchParams: Promise<{ tag?: string }>
    params: Promise<{ lang: Locale }>
}) {
    return <BlogContent searchParams={searchParams} params={params} />
}
