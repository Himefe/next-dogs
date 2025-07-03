"use client";

import Input from "@/components/core/input";
import styles from "./add-post-form.module.css";
import { useActionState, useRef } from "react";
import UploadIcon from "@/icons/upload";
import useMedia from "@/hooks/use-media";
import Button from "@/components/core/button";
import { postPhotoAction } from "@/actions/requests/photo";
import { generateResponse } from "@/lib/api";
import Error from "@/components/error";
import { Controller, useForm } from "react-hook-form";
import { PostPhotoFormState, postPhotoSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";

const AddPostForm = () => {
    const isMobile = useMedia("(max-width: 767px)");
    const inputRef = useRef<HTMLInputElement>(null);

    const [state, action, isSubmitting] = useActionState(postPhotoAction, generateResponse());

    const { formState, control, watch } = useForm<PostPhotoFormState>({
        resolver: zodResolver(postPhotoSchema),
        mode: "onChange",
        defaultValues: {
            nome: "",
            peso: "",
            idade: "",
        },
    });

    const file = watch("img");
    const fileErrorMessage = formState.errors.img?.message || state.fieldErrors?.img;

    const handleChangeFile = (onChange: (...event: any[]) => void) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.files?.[0]);
        };
    };

    const handleOpenFileInput = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <>
            <form action={action} className={styles.form}>
                <Controller
                    control={control}
                    name="nome"
                    render={({ field }) => (
                        <Input
                            {...field}
                            tabIndex={1}
                            error={formState.errors.nome?.message || state.fieldErrors?.nome}
                            label="Título"
                            type="text"
                            name="nome"
                            id="nome"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="peso"
                    render={({ field }) => (
                        <Input
                            {...field}
                            error={formState.errors.peso?.message || state.fieldErrors?.peso}
                            tabIndex={2}
                            label="Peso"
                            type="number"
                            name="peso"
                            id="peso"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="idade"
                    render={({ field }) => (
                        <Input
                            {...field}
                            error={formState.errors.idade?.message || state.fieldErrors?.idade}
                            tabIndex={3}
                            label="Idade"
                            type="number"
                            name="idade"
                            id="idade"
                        />
                    )}
                />
                <div className={styles["input-file-wrapper"]}>
                    <button
                        type="button"
                        tabIndex={4}
                        onClick={handleOpenFileInput}
                        aria-label="Selecionar arquivo"
                        className={styles["btn-file"]}>
                        <span className={styles["file-name"]} title={file?.name || ""}>
                            {file?.name || "Selecione um arquivo"}
                        </span>
                        <span className={styles["file-fake-btn"]}>
                            {!isMobile ? "Carregar Arquivo" : <UploadIcon />}
                        </span>
                        <Controller
                            control={control}
                            name="img"
                            render={({ field }) => {
                                return (
                                    <Input
                                        {...field}
                                        value={undefined}
                                        ref={(ref) => {
                                            field.ref(ref);
                                            inputRef.current = ref;
                                        }}
                                        type="file"
                                        id="input-file"
                                        onChange={handleChangeFile(field.onChange)}
                                    />
                                );
                            }}
                        />
                    </button>
                    {fileErrorMessage && <Error error={fileErrorMessage} />}
                </div>
                <Button
                    tabIndex={5}
                    disabled={!file || !formState.isValid}
                    isLoading={isSubmitting}
                    pendingLabel="Enviando...">
                    Adicionar
                </Button>

                {!!state.error && <Error error={state.error} />}
            </form>

            {!!file && (
                <div className={styles.preview} style={{ backgroundImage: `url('${URL.createObjectURL(file)}')` }} />
            )}
        </>
    );
};

export default AddPostForm;
