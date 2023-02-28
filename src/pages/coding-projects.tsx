import styles from '@/styles/CodingProjects.module.css'
import Layout from '@/components/Layout/Layout'
import { pageIdentifierImages } from '@/utils/image-declarations/pageIdentifierImages'
import { codingProjects } from '@/utils/coding_projects'
import GalleryLayout from '@/components/Layout/GalleryLayout'
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
                I've always loved to draw, and spent 5 years as a freelance illustrator creating children's books, branding illustration, portraits and more. Here's some of my favourite pieces I've worked on!
            </p>
            

          <GalleryLayout>
            {codingProjects.map((project, i)=>{
              return <GalleryItem 
                key={i}
                header={project.projectTitle} 
                img={project.image.source}
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