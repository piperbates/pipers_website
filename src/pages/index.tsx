import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layouts/PageLayout'
import { pageIdentifierImages } from '@/utils/image-declarations/pageIdentifierImages'
import { techStack } from '@/utils/techStack'
import Image from 'next/image'

export default function Home() {
  const pageDetails = {
    pageTitle: 'Home',
    pageHeader: 'Piper Bates',
    pageImage: pageIdentifierImages.home.src
  }

  const homePageTechStack = [
    techStack.react, techStack.redux, techStack.typescript, techStack.node
  ]


  return (
    <Layout pageTitle={pageDetails.pageTitle} pageImage={pageDetails.pageImage} pageHeader={pageDetails.pageHeader}>
            <p>
                An experienced software engineer with an eye for UI/UX design. <br />

                Currently working as a Frontend Engineer for SteelBuy.
            </p>
            <div className={styles.techStack}>
              {
              homePageTechStack.map((tech, i)=>
                <Image key={i} src={tech.logo} alt={tech.name} width={100} height={100} className={styles.techStackImg} />
                )
            }
          

            </div>
    </Layout>
  )
}