import React from 'react';

const Face = ({ 
    src, 
    alt, 
    fallbackSrc, 
    mediaType = 'image/webp',  
    ...delegated 
}) => {
    return (
        <picture className="face">
            <source srcSet={src} type={mediaType} />
            <img 
                src={fallbackSrc} 
                alt={alt} 
                {...delegated} 
            />
        </picture>
        
        
    );
}

export default Face;
