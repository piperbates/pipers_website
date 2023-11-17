import Image from 'next/image';
import Layout from '@/components/Layouts/PageLayout';
import { pageIdentifierImages } from '@/utils/image-declarations/pageIdentifierImages';
import { techStack } from '@/utils/techStack';
import mugshot from '@/images/piperface.jpeg';
import styles from '@/styles/Home.module.css';
import Socials from '@/components/Socials';
import { socials } from '@/utils/socials';


export default function Home() {
  const pageDetails = {
    pageTitle: 'Home',
    pageHeader: 'Piper Bates',
    pageImage: pageIdentifierImages.home.src
  };

  const homePageTechStack = [
    techStack.react, techStack.redux, techStack.typescript, techStack.node
  ];

  return (
    <Layout pageTitle={pageDetails.pageTitle} pageImage={pageDetails.pageImage} pageHeader={pageDetails.pageHeader}>
            <div className={styles.mugshotBox}>
        <Image src={mugshot} alt="A selfie of Piper" width={100} height={100} className={styles.mugshot}/>
      </div>

      <p>Having worked as an illustrator for five years, I took a bold leap of faith in 2020 and enrolled in a four-month coding bootcamp. It was during this program that I discovered my passion for software development, particularly in the realm of Front End development. I thrive in Agile environments where I can contribute to the success of a project and make a difference.</p>

      <p>I also mentor for the School of Code and occasionally do talks about diversity and inclusivity in tech. </p>
            
      <div className={styles.aboutSocialsBox}>
        <h2>Contact me:</h2>
        <Socials socials={socials}/>
      </div>
            
            
            
            <div className={styles.techStack}>
              {
              homePageTechStack.map((tech, i)=>
                <Image key={i} src={tech.logo} alt={tech.name} width={100} height={100} className={styles.techStackImg} />
                )
            }
            </div>
    </Layout>
  )
};