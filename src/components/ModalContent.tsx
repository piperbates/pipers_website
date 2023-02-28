import styles from '@/styles/Modal.module.css'
import { Modal_Data } from '@/utils/context/ModalContext';
import useOnClickOutside from '@/utils/hooks/useOnClickOutside';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';

export default function ModalContent () {

    const modalRef = useRef(null);
    const { modalOpen, setModalOpen, modalContent, setModalContent } = useContext(Modal_Data)

    const modalClose = () => {
        setModalOpen(false);
        setModalContent(null);
    }

    useOnClickOutside(modalRef, modalClose);  

    return <div className={styles.modalContent} ref={modalRef}>
        <button className={styles.closeButton} onClick={()=>modalClose()}>X</button>
        
        <h1>{modalContent?.title}</h1>

        <div className={styles.modalContentImageBox}>{modalContent && <Image src={modalContent.imageSrc} alt={modalContent?.imageAlt} width={300} height={200} />}</div>

        <div className={styles.modalContentDescriptionBox}>{modalContent?.description}</div>

        <div className={styles.galleryItemFooter}>
            <ul>
                {modalContent?.githubLink && <li><Link href={modalContent.githubLink} target="_blank">View on Github</Link></li>}
            {modalContent?.liveLink && <li><Link href={modalContent.liveLink} target="_blank">View Live</Link></li>}
            </ul>
        </div>

    {modalContent?.techStack &&
        <div className={styles.techStackBox}>
            {modalContent.techStack.map((tech, i)=>{
                return <Image key={i} src={tech.logo} alt={tech.name} width={50} height={50}/>
            })}
        </div>
    }
    </div>
}