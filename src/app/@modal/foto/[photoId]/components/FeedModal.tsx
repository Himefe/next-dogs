"use client";

import styles from "@/app/_feed/css/feed-photos-modal.module.css";
import { useRouter } from "next/navigation";
import PhotoContent, { PhotoContentProps } from "./PhotoContent";

type FeedModalProps = Partial<PhotoContentProps>;

const FeedModal = ({ photo, comments = [], user }: FeedModalProps) => {
    const router = useRouter();

    const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            router.back();
        }
    };

    return (
        <div className={styles.modal} onClick={handleCloseModal}>
            {!!photo ? (
                <PhotoContent comments={comments} photo={photo} user={user} />
            ) : (
                <div className={styles.modalPhoto}>
                    <h3>Não foi encontrado o conteúdo desta foto.</h3>
                </div>
            )}
        </div>
    );
};

export default FeedModal;
