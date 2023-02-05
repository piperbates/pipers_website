import React, { useContext } from "react";
import { ModalContext } from "../Modal/ModalContext";

import './GalleryItem.scss';

interface GalleryItemProps {
    image: string,
    imageDescription: string,
    title: string,
    projectDescription: string,
    githubLink?: string,
    liveLink?: string,
    techStack?: {
        name: string;
        logo: string;
    }[]
}

export const GalleryItem = (props: GalleryItemProps) => {

    const { image, imageDescription, title, projectDescription, techStack, liveLink, githubLink } = props;

    const { setModalOpen, setModalContent } = useContext<any>(ModalContext);

        const handleModalClick = () => {
            setModalContent({
                title,
                image,
                imageDescription,
                projectDescription,
                githubLink,
                techStack,
                liveLink
            })
            setModalOpen(true)
        }


    return (
    <div className="gallery-item" onClick={()=>handleModalClick()}>
        <div className="gallery-item__header">
            <h1>{title}</h1>
        </div>

        <div className="gallery-item__content">
            <img 
                src={image} 
                alt={imageDescription} 
            />
        </div>

    </div>)
}