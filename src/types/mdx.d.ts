// types/mdx.d.ts
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
