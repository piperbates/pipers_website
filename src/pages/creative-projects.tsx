import Layout from '@/components/Layouts/PageLayout';
import { pageIdentifierImages } from '@/utils/image-declarations/pageIdentifierImages';
import GalleryItem from '@/components/GalleryItem';
import GalleryLayout from '@/components/Layouts/GalleryLayout';
import { creativeProjects } from '@/utils/creative_projects';

export default function CreativeProjects() {
  const pageDetails = {
    pageTitle: 'Creative Projects',
    pageImage: pageIdentifierImages.creativeProjects.src,
    pageHeader: 'Creative Projects'
  };

  return (
    <Layout 
        pageTitle={pageDetails.pageTitle} 
        pageHeader={pageDetails.pageHeader}
        pageImage={pageDetails.pageImage}>
      <p>
                I've always loved to draw, and spent 5 years as a freelance illustrator creating children's books, branding illustration, portraits and more. Here's some of my favourite pieces I've worked on!
            </p>

            <GalleryLayout>
            {creativeProjects.map((project, i)=>{
              return <GalleryItem 
                key={i}
                title={project.projectTitle}
                description={project.projectDescription}
                imageSrc={project.image.source}
                imageAlt={project.image.description}
              />
            })}
          </GalleryLayout>
    </Layout>
  )
};