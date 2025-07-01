"use client";

import { useActionState } from "react";
import styles from "./form.module.css";
import SendCommentIcon from "@/icons/send-comment";
import { generateResponse } from "@/lib/api";
import { postPhotoCommentAction } from "@/actions/requests/photo";
import Error from "@/components/error";

type PhotoCommentProps = {
    photoId: number;
};

const PhotoComment = ({ photoId }: PhotoCommentProps) => {
    const [state, action, isSubmitting] = useActionState(postPhotoCommentAction, generateResponse());

    return (
        <form action={action} className={styles.form}>
            <input type="hidden" name="photoId" value={photoId} hidden />
            <textarea
                disabled={isSubmitting}
                placeholder="Digite aqui seu comentário"
                name="comment"
                className={styles.textArea}
            />
            <button type="submit" disabled={isSubmitting} className={styles.send}>
                <SendCommentIcon />
            </button>

            {!!state?.error && <Error error={state.error} />}
        </form>
    );
};

export default PhotoComment;
