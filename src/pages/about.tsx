import styles from '@/styles/About.module.css'
import Layout from '@/components/Layouts/PageLayout'
import { pageIdentifierImages } from '@/utils/image-declarations/pageIdentifierImages'
import mugshot from '@/images/piperface.jpeg'
import Image from 'next/image'
import Socials from '@/components/Socials'

export default function About() {
  const pageDetails = {
    pageTitle: 'About',
    pageHeader: 'About',
    pageImage: pageIdentifierImages.about.src

  }
  return (
    <Layout pageTitle={pageDetails.pageTitle} pageImage={pageDetails.pageImage} pageHeader={pageDetails.pageHeader}>
      <div className={styles.mugshotBox}><Image src={mugshot} alt="A selfie of Piper" width={100} height={100} className={styles.mugshot}/></div>
      <p>After working as an illustrator for 5 years I took a leap of faith in 2020 and did a 4 month coding bootcamp. I developed a love of front end development, and soon went from Junior Software Engineer to Front End Engineer in just a couple of years.</p> 
      <div className={styles.aboutSocialsBox}>
        <Socials />
      </div>
    
    </Layout>
  )
}