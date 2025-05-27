"use client";

import { useState } from "react";
import styles from "./css/PhotoComment.module.css";
import PhotoCommentForm from "./PhotoCommentForm";
import { useGetUser } from "@/contexts/user";
import { FeedPhotoComment } from "@/types/feed";

type PhotoCommentsProps = {
    id: number;
    comments: FeedPhotoComment[];
};

const PhotoComments = ({ comments: commentsProps = [], id }: PhotoCommentsProps) => {
    const [comments, setComments] = useState(commentsProps);

    const { user } = useGetUser();

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.comentariosArea}>
                    {!!comments.length &&
                        comments.map((comment) => (
                            <li key={comment?.comment_ID} className={styles.comentarios}>
                                <strong>{`${comment?.comment_author}: `}</strong>
                                <p>{comment?.comment_content}</p>
                            </li>
                        ))}
                </ul>
            </div>
            {user && <PhotoCommentForm setComments={setComments} id={id} />}
        </>
    );
};

export default PhotoComments;
