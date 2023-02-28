import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { GalleryType } from '../types/GalleryTypes';

type ModalContextTypes = {
    children: React.ReactNode
}

type ModalDataTypes = {
    modalOpen: boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    modalContent: GalleryType | null,
    setModalContent: Dispatch<SetStateAction<GalleryType | null>>
}

export const Modal_Data = createContext<ModalDataTypes>({
    modalOpen: false,
    setModalOpen: () => {},
    modalContent: null,
    setModalContent: () => {}
})

export default function ModalContext ({children}: ModalContextTypes) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<GalleryType | null>(null);

    return (
        <Modal_Data.Provider value={{ modalOpen, setModalOpen, modalContent, setModalContent,  }}>
          {children}
        </Modal_Data.Provider>
      );
}