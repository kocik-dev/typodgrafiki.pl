/**
 * Deklaracja typów dla plików MDX
 *
 * Rozszerza system typów TypeScript o obsługę plików MDX,
 * definiując ich strukturę i metadane (frontmatter).
 *
 * @module
 * Deklaracja modułu "*.mdx"
 *
 * @exports
 * frontMatter {
 *   title: string - Tytuł dokumentu
 *   date: string - Data publikacji
 *   description?: string - Opcjonalny opis
 *   tags?: string[] - Opcjonalne tagi
 * }
 *
 * @exports default
 * ComponentType - Komponent React reprezentujący zawartość MDX
 *
 * @usage
 * ```tsx
 * import Post, { frontMatter } from './post.mdx'
 *
 * // Użycie metadanych
 * console.log(frontMatter.title)
 *
 * // Renderowanie zawartości
 * <Post />
 * ```
 *
 * @notes
 * - Używane dla integracji MDX z TypeScript
 * - Pozwala na importowanie plików .mdx jako komponenty React
 * - Zapewnia typowanie dla frontmatter
 */

declare module "*.mdx" {
    import { ComponentProps, ComponentType } from "react"

    export const frontMatter: {
        title: string
        date: string
        description?: string
        tags?: string[]
    }

    const component: ComponentType
    export default component
}
