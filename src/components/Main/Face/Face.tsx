import React, { HTMLAttributes } from "react"

interface FaceProps extends HTMLAttributes<HTMLPictureElement> {
    src: string
    alt: string
    fallbackSrc: string
    mediaType?: string
    height?: number
    width?: number
}

const Face: React.FC<FaceProps> = ({
    src,
    alt,
    fallbackSrc,
    mediaType = "image/webp",
    ...delegated
}) => {
    return (
        <picture className="face">
            <source
                srcSet={src}
                type={mediaType}
            />
            <img
                src={fallbackSrc}
                alt={alt}
                {...delegated}
            />
        </picture>
    )
}

export default Face
