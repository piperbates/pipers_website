import React, { useContext } from 'react';
import { TechStackType } from '../../content/techStack';
import { Modal } from '../Modal/Modal';
import { ModalContext } from '../Modal/ModalContext';

export const GalleryModal = () => {

    const {
        modalContent,
        modalOpen,
        setModalOpen,
        setModalContent,
    } = useContext<any>(ModalContext);

    const modalToggle = () => {
        if(modalOpen){
            setModalOpen(false)
            setModalContent({})
        }
        else {
            setModalOpen(true)}
        }

    return (
            <Modal>
                <div>
                    <button onClick={() => modalToggle()}>X</button>
                    <div className="modal__header">
                        <h1>{modalContent.title}</h1>
                    </div>
                            
                    <div className="modal__content">
                        <img src={modalContent.image} alt={modalContent.imageDescription} className='modal__main-image' />
                        <p>{modalContent.projectDescription}</p>
                        <div className="modal__tech-stack">
                            {modalContent.techStack && <p>
                                {modalContent.techStack.map((item: TechStackType)=>{
                                    return <img src={item.logo} alt={`${item.name} logo`} className='modal__tech-images' key={item.name} />
                            })}
                        </p>}
                        </div>
                    </div>

                            
                    <div className="modal__footer">
                        {modalContent.githubLink && <a href={modalContent.githubLink} target='_blank' rel="noreferrer">Github</a>}
                        {modalContent.liveLink && <a href={modalContent.liveLink} target='_blank' rel="noreferrer">See Live</a>}
                    </div>
                </div>
            </Modal>
    )
}