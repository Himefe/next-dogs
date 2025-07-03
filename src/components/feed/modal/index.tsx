"use client";

import { useRouter } from "next/navigation";
import PhotoContent from "./photo/content";
import { usePhoto } from "../../../contexts/photo";

const FeedModal = () => {
    const router = useRouter();

    const { photo } = usePhoto();

    const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            router.back();
        }
    };

    return (
        <div className="modal" onClick={handleCloseModal}>
            {!!photo ? (
                <PhotoContent photo={photo} />
            ) : (
                <div className="modal-content">
                    <h3 className="no-content">Nenhuma foto encontrada.</h3>
                </div>
            )}
        </div>
    );
};

export default FeedModal;
