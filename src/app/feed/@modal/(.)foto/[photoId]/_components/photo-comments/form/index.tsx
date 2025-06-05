"use client";

import React from "react";
import styles from "./form.module.css";
import SendCommentIcon from "@/icons/send-comment";

type PhotoCommentProps = {
    photoId: number;
};

const PhotoComment = ({ photoId }: PhotoCommentProps) => {
    console.log("🚀 ~ PhotoComment ~ id:", photoId);

    const sendComment = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const msg = formData.get("comment") as string;
        console.log(msg);
    };

    return (
        <form onSubmit={sendComment} className={styles.form}>
            <textarea placeholder="Digite aqui seu comentário" name="comment" className={styles.textArea} />
            <button className={styles.send}>
                <SendCommentIcon />
            </button>
        </form>
    );
};

export default PhotoComment;
