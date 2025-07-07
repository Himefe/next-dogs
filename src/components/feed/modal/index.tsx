"use client";

import PhotoContent from "./photo/content";
import { usePhoto } from "@/contexts/photo";
import Modal from "@/components/modal";

const FeedModal = () => {
    const { photo } = usePhoto();

    return (
        <Modal>
            {photo ? <PhotoContent photo={photo} /> : <h3 className="no-content">Nenhuma foto encontrada.</h3>}
        </Modal>
    );
};

export default FeedModal;
