"use client";

import { useState } from "react";
import styles from "./photo-comments.module.css";
import PhotoCommentForm from "./form";
import { useGetUser } from "@/contexts/user";
import { FeedPhotoComment } from "@/types/feed";

type PhotoCommentsProps = {
    id: number;
    comments: FeedPhotoComment[];
};

const PhotoComments = ({ comments: commentsProps = [], id }: PhotoCommentsProps) => {
    const [comments, setComments] = useState(commentsProps);

    const { user } = useGetUser();
    console.log("🚀 ~ PhotoComments ~ user:", user);

    return (
        <>
            <div className={styles.container}>
                <ul className={styles["comments-area"]}>
                    {!!comments.length &&
                        comments.map((comment) => (
                            <li key={comment?.comment_ID} className={styles.comments}>
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
