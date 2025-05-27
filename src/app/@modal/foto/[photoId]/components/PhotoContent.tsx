"use client";

import Link from "next/link";
import ButtonDelete from "./ButtonDelete";
import styles from "./css/PhotoContent.module.css";
import PhotoComments from "./PhotoComments";
import Image from "next/image";
import { FeedPhoto, FeedPhotoComment } from "@/types/feed";
import { User } from "@/types/user";

export type PhotoContentProps = Required<{
    photo: FeedPhoto;
    comments: FeedPhotoComment[];
}> & {
    user?: User;
};

const PhotoContent = ({ photo, comments = [], user }: PhotoContentProps) => {
    return (
        <div className={styles.modalPhoto}>
            <div className={styles.imgContent}>
                <Image width={1000} height={1000} alt={photo?.title || ""} src={photo?.src || ""} />
            </div>
            <div className={styles.contentComment}>
                <div className={styles.container}>
                    <p className={styles.author}>
                        {photo.author !== user?.nome ? <Link href={`/perfil/${photo?.author}`}>@{photo?.author}</Link> : <ButtonDelete photoId={photo.id} />}
                        <span>{photo.acessos}</span>
                    </p>
                    <h1 className="title">
                        <Link href={`/foto/${photo.id}`}>{photo?.title}</Link>
                    </h1>
                    <div className={styles.atributos}>
                        <span>{photo.peso} Kg</span>
                        <span>{photo.idade} anos</span>
                    </div>
                </div>
                <PhotoComments comments={comments} id={photo.id} />
            </div>
        </div>
    );
};

export default PhotoContent;
