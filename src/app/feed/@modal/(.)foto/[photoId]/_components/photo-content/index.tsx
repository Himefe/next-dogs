"use client";

import Link from "next/link";
import styles from "./photo-content.module.css";
import PhotoComments from "../photo-comments";
import Image from "next/image";
import { FeedPhoto } from "@/types/feed";
import { usePhoto } from "../../_contexts/photo";
import classNames from "classnames";

export type PhotoContentProps = {
    photo: FeedPhoto;
};

const PhotoContent = ({ photo }: PhotoContentProps) => {
    const { user } = usePhoto();

    const handleDelete = () => {
        window.confirm("Deseja realmente deletar esta foto?");

        console.log(photo.id);
    };

    return (
        <div className={classNames("modal-content", styles["modal-photo"])}>
            <div className={styles["img-content"]}>
                <Image width={1000} height={1000} alt={photo?.title || ""} src={photo?.src || ""} />
            </div>
            <div className={styles["comment-content"]}>
                <div className={styles.container}>
                    <p className={styles.author}>
                        {photo.author !== user?.username ? (
                            <Link href={`/perfil/${photo?.author}`}>@{photo?.author}</Link>
                        ) : (
                            <button disabled={false} onClick={handleDelete} className={styles.delete}>
                                Deletar
                            </button>
                        )}
                        <span>{photo.acessos}</span>
                    </p>
                    <h1 title={photo?.title || ""} className="title">
                        {photo?.title}
                    </h1>
                    <div className={styles.attributes}>
                        <span>{photo.peso} Kg</span>
                        <span>{photo.idade} anos</span>
                    </div>
                </div>
                <PhotoComments photoId={photo.id} />
            </div>
        </div>
    );
};

export default PhotoContent;
