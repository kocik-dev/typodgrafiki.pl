import { StaticImageData } from "next/image"

export type TypeIcons = TypeIcon[]

export type TypeIcon = {
    src: StaticImageData
    alt: string
}

export interface ProjectItem {
    name: string
    scope: string
    image: StaticImageData
    width: number
    height: number
}

export type PropsSocialLinks = {
    instagram: string
    x: string
    linkedin: string
    github: string
}
export interface BlogPost {
    slug: string
    title: string
    date: string
    content: string
}
