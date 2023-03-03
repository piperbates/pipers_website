import styles from '@/styles/CodingProjects.module.css'
import Layout from '@/components/Layouts/PageLayout'
import { pageIdentifierImages } from '@/utils/image-declarations/pageIdentifierImages'
import { codingProjects } from '@/utils/coding_projects'
import GalleryLayout from '@/components/Layouts/GalleryLayout'
import GalleryItem from '@/components/GalleryItem'
import { projectInfo } from '@/utils/projectInfo'
import { techStack } from '@/utils/techStack'

export default function CreativeProjects() {
  const pageDetails = {
    pageTitle: 'Coding Projects',
    pageImage: pageIdentifierImages.codingProjects.src,
    pageHeader: 'Coding Projects'
  }

  return (
    <Layout 
        pageTitle={pageDetails.pageTitle} 
        pageHeader={pageDetails.pageHeader}
        pageImage={pageDetails.pageImage}>
          <div>
            <p>
            Click on an item to see more information
            </p>
            

          <GalleryLayout>
            {codingProjects.map((project, i)=>{
              return <GalleryItem 
                key={i}
                title={project.projectTitle}
                description={project.projectDescription}
                imageSrc={project.image.source}
                imageAlt={project.image.description}
                githubLink={project.links.githubLink}
                liveLink={project.links.liveLink}
                techStack={project.techStack}
              />
            })}
          </GalleryLayout>
      </div>
    </Layout>
  )
}
