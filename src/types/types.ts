import { StaticImageData } from "next/image"

export type TypeIcons = TypeIcon[]

export type TypeIcon = {
    src: StaticImageData
    alt: string
}
