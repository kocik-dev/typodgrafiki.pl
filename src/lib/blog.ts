/**
 * Blog - Moduł zarządzania postami blogowymi
 *
 * Moduł udostępnia funkcje do obsługi postów blogowych zapisanych w plikach MDX.
 * Obsługuje metadane, sortowanie, filtry i operacje CRUD na postach.
 *
 * @interfaces
 * BlogPostMetadata {
 *   slug: string - Unikalny identyfikator URL
 *   title: string - Tytuł posta
 *   date: string - Data publikacji (ISO string)
 *   description?: string - Opcjonalny opis
 *   author?: string - Opcjonalny autor
 *   tags?: string[] - Opcjonalne tagi
 * }
 *
 * BlogPost extends BlogPostMetadata {
 *   content: string - Treść posta w MDX
 * }
 *
 * @functions
 * getBlogPosts(): Promise<BlogPostMetadata[]>
 * - Pobiera wszystkie posty
 * - Filtruje pliki .md i .mdx
 * - Sortuje po dacie (malejąco)
 * - Parsuje frontmatter przez gray-matter
 *
 * getPostBySlug(slug: string): Promise<BlogPost | null>
 * - Pobiera pojedynczy post po slugu
 * - Zwraca pełną treść i metadane
 * - Obsługuje błędy (zwraca null)
 *
 * postExists(slug: string): Promise<boolean>
 * - Sprawdza czy post o danym slugu istnieje
 *
 * @constants
 * postsDirectory: Ścieżka do katalogu z postami
 * listTags: Predefiniowana lista dostępnych tagów
 *
 * @fileStructure
 * content/blog/en/
 * - Pliki .mdx z frontmatter
 * - Metadane w YAML
 * - Treść w MDX
 *
 * @example
 * ```ts
 * // Pobranie wszystkich postów
 * const posts = await getBlogPosts();
 *
 * // Pobranie pojedynczego posta
 * const post = await getPostBySlug('post-slug');
 *
 * // Sprawdzenie istnienia
 * const exists = await postExists('post-slug');
 * ```
 *
 * @errorHandling
 * - Obsługa braku katalogu postów
 * - Obsługa błędów odczytu plików
 * - Wartości domyślne dla brakujących metadanych
 */

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

        // Sprawdzamy, czy plik istnieje, zanim go otworzymy
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`)
            return null
        }

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
