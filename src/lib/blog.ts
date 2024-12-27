import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog/en")

export interface BlogPostMetadata {
    slug: string
    title: string
    date: string
    description?: string
    author?: string
    tags?: string[]
}

// Interfejs dla pełnego posta
export interface BlogPost extends BlogPostMetadata {
    content: string
}

// Funkcja do pobierania wszystkich postów (już masz)

export async function getBlogPosts() {
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const files = fs.readdirSync(postsDirectory)

    const posts = files
        .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
        .map((file) => {
            const filePath = path.join(postsDirectory, file)
            const fileContents = fs.readFileSync(filePath, "utf8")

            const { data } = matter(fileContents)

            return {
                slug: file.replace(/\.(md|mdx)$/, ""),
                date: data.date
                    ? new Date(data.date).toISOString()
                    : new Date().toISOString(),
                title: data.title || "",
                description: data.description || "",
                tags: data.tags || [],
            }
        })
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    return posts
}

// Nowa funkcja do pobierania pojedynczego posta
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const filePath = path.join(postsDirectory, `${slug}.mdx`)
        const fileContents = fs.readFileSync(filePath, "utf8")

        const { data, content } = matter(fileContents)

        return {
            slug,
            title: data.title || "Untitled",
            date: data.date
                ? new Date(data.date).toISOString()
                : new Date().toISOString(),
            description: data.description,
            author: data.author,
            tags: data.tags,
            content,
        }
    } catch (error) {
        console.error(`Error loading post ${slug}:`, error)
        return null
    }
}

// Funkcja pomocnicza do sprawdzania czy post istnieje
export async function postExists(slug: string): Promise<boolean> {
    return fs.existsSync(path.join(postsDirectory, `${slug}.mdx`))
}

export const listTags = [
    "animations",
    "react",
    "accessibility",
    "css and layouts",
    "next.js",
    "web3",
]
