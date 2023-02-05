import React from "react";
import './Gallery.scss'

interface GalleryProps {
    children: React.ReactNode,
}

export const Gallery = (props: GalleryProps) => {

    const { children } = props
    return <div className="gallery">
        {children}
    </div>
}