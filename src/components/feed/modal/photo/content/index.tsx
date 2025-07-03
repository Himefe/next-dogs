"use client";

import Link from "next/link";
import styles from "./photo-content.module.css";
import PhotoComments from "../comments";
import Image from "next/image";
import { FeedPhoto } from "@/types/feed";
import { usePhoto } from "../../../../../contexts/photo";
import classNames from "classnames";
import { photoDeleteAction } from "@/actions/requests/photo";
import { usePathname, useRouter } from "next/navigation";

export type PhotoContentProps = {
    photo: FeedPhoto;
};

const PhotoContent = ({ photo }: PhotoContentProps) => {
    const { user } = usePhoto();
    const pathname = usePathname();
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const isConfirmed = window.confirm("Deseja realmente deletar esta foto?");

            const formData = new FormData();
            formData.append("photoId", photo.id.toString() || "");

            if (isConfirmed) {
                await photoDeleteAction(undefined, formData);

                router.replace(pathname.includes("conta") ? "/conta" : "/feed");
            }
        } catch (error) {
            console.log(error);
        }
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
