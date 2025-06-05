"use client";

import styles from "./photo-comments.module.css";
import PhotoCommentForm from "./form";
import { usePhoto } from "../../_contexts/photo";

type PhotoCommentsProps = {
    photoId: number;
};

const PhotoComments = ({ photoId }: PhotoCommentsProps) => {
    const { user, comments = [] } = usePhoto();

    return (
        <>
            <div className={styles.container}>
                <ul className={styles["comments-area"]}>
                    {comments.map((comment) => (
                        <li key={comment.comment_ID} className={styles.comments}>
                            <strong>{`${comment.comment_author}: `}</strong>
                            <p>{comment.comment_content}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {!!user && <PhotoCommentForm photoId={photoId} />}
        </>
    );
};

export default PhotoComments;
