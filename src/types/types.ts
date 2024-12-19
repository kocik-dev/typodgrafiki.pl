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
