import React, { useContext, useRef } from 'react';
import { ModalContext } from './ModalContext';

import './Modal.scss';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface ModalProps {

}

export const Modal = (props: ModalProps) => {

    const modalRef = useRef<HTMLDivElement>(null);

    const {
        modalOpen, 
        setModalOpen, 
        modalContent,
        setModalContent
    } = useContext<any>(ModalContext);

      const modalToggle = () => {
        if(modalOpen){
            setModalOpen(false)
            setModalContent({})
        }
        else {
            setModalOpen(true)}
        }

        useOnClickOutside(modalRef, () => setModalOpen(false))

        return (
        <div className="modal">
            <div className="modal__actual">
                <button onClick={() => modalToggle()}>X</button>

                <div className="modal__headher" ref={modalRef}>
                    <h1>{modalContent.title}</h1>
                </div>
                
                <div className="modal__content">
                    <img src={modalContent.image} alt={modalContent.imageDescription} className='modal__main-image' />
                    <p>{modalContent.projectDescription}</p>
                    <div className="modal__tech-stack">
                        {modalContent.techStack && <p>
                            {modalContent.techStack.map((item: any)=>{
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
        </div>)
}