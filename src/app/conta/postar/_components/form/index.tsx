"use client";

import Input from "@/components/login/input";
import styles from "./add-post-form.module.css";
import { useActionState, useRef, useState } from "react";
import UploadIcon from "@/icons/upload";
import useMedia from "@/hooks/use-media";
import Button from "@/components/login/button";
import { postPhotoAction } from "@/actions/requests/photo";
import { generateResponse } from "@/lib/api";
import Error from "@/components/error";

const AddPostForm = () => {
    const isMobile = useMedia("(max-width: 767px)");

    const [state, action, isSubmitting] = useActionState(postPhotoAction, generateResponse());
    const [file, setFile] = useState<File>();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!!file) {
            setFile(file);
        }
    };

    const handleOpenFileInput = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <>
            <form action={action} className={styles.form}>
                <Input tabIndex={1} label="Título" type="text" name="nome" id="nome" />
                <Input tabIndex={2} label="Peso" type="number" name="peso" id="peso" />
                <Input tabIndex={3} label="Idade" type="number" name="idade" id="idade" />
                <button type="button" tabIndex={4} onClick={handleOpenFileInput} aria-label="Selecionar arquivo" className={styles["btn-file"]}>
                    <span className={styles["file-name"]} title={file?.name || ""}>
                        {file?.name || "Selecione um arquivo"}
                    </span>
                    <span className={styles["file-fake-btn"]}>{!isMobile ? "Carregar Arquivo" : <UploadIcon />}</span>
                    <input ref={inputRef} type="file" name="img" id="input-file" onChange={handleChangeFile} />
                </button>
                <Button tabIndex={5} disabled={!file} isLoading={isSubmitting} pendingLabel="Enviando...">
                    Adicionar
                </Button>

                {!!state.error && <Error error={state.error} />}
            </form>

            {!!file && <div className={styles.preview} style={{ backgroundImage: `url('${URL.createObjectURL(file)}')` }} />}
        </>
    );
};

export default AddPostForm;
