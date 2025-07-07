"use client";

import { useActionState, useEffect } from "react";
import styles from "./form.module.css";
import SendCommentIcon from "@/icons/send-comment";
import { generateResponse } from "@/lib/api";
import { postPhotoCommentAction } from "@/actions/requests/photo";
import Error from "@/components/error";
import { Controller, useForm } from "react-hook-form";
import { PhotoCommentFormState, photoCommentSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";

type PhotoCommentProps = {
    photoId: number;
};

const PhotoComment = ({ photoId }: PhotoCommentProps) => {
    const [state, action, isSubmitting] = useActionState(postPhotoCommentAction, generateResponse());

    const { control, formState, resetField } = useForm<PhotoCommentFormState>({
        mode: "onChange",
        resolver: zodResolver(photoCommentSchema),
        defaultValues: {
            comment: "",
        },
    });

    useEffect(() => {
        if (state.ok) resetField("comment");
    }, [resetField, state]);

    return (
        <form action={action} className={styles.form}>
            <input type="hidden" name="photoId" value={photoId} hidden />
            <Controller
                control={control}
                name="comment"
                render={({ field }) => (
                    <textarea
                        {...field}
                        required={true}
                        disabled={isSubmitting}
                        placeholder="Digite aqui seu comentário"
                        name="comment"
                        className={styles.textArea}
                    />
                )}
            />
            <button type="submit" disabled={isSubmitting || !formState.isValid} className={styles.send}>
                <SendCommentIcon />
            </button>

            {!!state?.error && <Error error={state.error} />}
        </form>
    );
};

export default PhotoComment;
