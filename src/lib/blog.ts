import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

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
                title: data.title || "Untitled",
                // możesz dodać więcej metadanych jeśli potrzebujesz
            }
        })
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    return posts
}
