import React, { useContext, useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { ModalContext } from '../Modal/ModalContext';

import './Modal.scss'

interface ModalProps {
    children: JSX.Element
}

export const Modal = (props: ModalProps) => {

    const { children } = props;

    const {
        setModalOpen,
    } = useContext<any>(ModalContext);

    const ref = useRef<HTMLDivElement>(null);

        useOnClickOutside(ref, () => setModalOpen(false))

        return (
        <div className="modal">
            <div className="modal__actual" ref={ref}>
                {children}
            </div>
        </div>)
}