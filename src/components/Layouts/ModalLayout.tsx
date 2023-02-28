import styles from '@/styles/Modal.module.css'
import ModalContent from '../ModalContent'

export default function Modal () {

    return (
    <div className={styles.modalWrapper}>
        <ModalContent />
    </div>
    )
}