"use client";

import React, { Dispatch, SetStateAction } from "react";
import styles from "./form.module.css";
import Image from "next/image";
import { FeedPhotoComment } from "@/types/feed";

type PhotoCommentProps = {
    id: number;
    setComments: Dispatch<SetStateAction<FeedPhotoComment[]>>;
};

const PhotoComment = ({ id, setComments }: PhotoCommentProps) => {
    const [comment, setComment] = React.useState("");
    console.log("🚀 ~ PhotoComment ~ id:", id);

    console.log("🚀 ~ PhotoComment ~ setComments:", setComments);

    const sendComment = async (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={sendComment} className={styles.form}>
            <textarea placeholder="Digite aqui seu comentário" value={comment} onChange={({ target }) => setComment(target.value)} className={styles.textArea} />
            <button className={styles.send}>
                <Image alt="Enviar comentário" width={24} height={24} src="/assets/send.svg" />
            </button>
        </form>
    );
};

export default PhotoComment;
