"use client";

import { useRouter } from "next/navigation";
import PhotoContent, { PhotoContentProps } from "../photo-content";

type FeedModalProps = Partial<PhotoContentProps>;

const FeedModal = ({ photo, comments = [], user }: FeedModalProps) => {
    const router = useRouter();

    const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            router.back();
        }
    };

    return (
        <div className="modal" onClick={handleCloseModal}>
            {!!photo ? (
                <PhotoContent comments={comments} photo={photo} user={user} />
            ) : (
                <div className="modal-content">
                    <h3 className="no-content">Ocorreu um erro ao buscar o conteúdo, por favor tente novamente.</h3>
                </div>
            )}
        </div>
    );
};

export default FeedModal;
