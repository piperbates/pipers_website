import React from 'react';
import { Gallery } from '../components/Gallery/Gallery';
import { GalleryItem } from '../components/GalleryItem/GalleryItem';
import { codingProjects } from '../content/modalContent/coding-projects';

export const ProjectsPage = () => {
    return <div className="projects-page">
        <p>Click on an item to see more information</p>
        <Gallery>
            {codingProjects.map((item)=>(<GalleryItem
                            key={item.projectTitle}
                            image={item.image.source} 
                            imageDescription={item.image.description}  
                            title={item.projectTitle}
                            projectDescription={item.projectDescription}
                            liveLink={item.links.liveLink}
                            githubLink={item.links.githubLink}
                            techStack={item.techStack}
            />
                ))}
        </Gallery>
    </div>
}