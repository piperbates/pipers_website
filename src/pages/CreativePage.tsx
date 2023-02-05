import React from 'react';
import { Gallery } from '../components/Gallery/Gallery';

import { GalleryItem } from '../components/GalleryItem/GalleryItem';
import { creativeProjects } from '../content/modalContent/creative-projects';
import { CreativePageContent } from '../content/pageContent/CreativePageContent';

export const CreativePage = () => {

    return <div className="creative-page">
        <CreativePageContent />
        <Gallery>
            {creativeProjects.map((item)=>(<GalleryItem 
                            key={item.projectTitle}
                            image={item.image.source} 
                            imageDescription={item.image.description}  
                            title={item.projectTitle}
                            projectDescription={item.projectDescription}
            />
                ))}
        </Gallery>
    </div>
}