"use client";

import { ReactEventHandler, useState } from "react";
import Image from "next/image";
import { FeedPhoto } from "@/types/feed";
import styles from "../feed-photos.module.css";
import Link from "next/link";

type FeedPhotosItemProps = {
    item: FeedPhoto;
};

const FeedPhotosItem = ({ item }: FeedPhotosItemProps) => {
    const [attAcesso, setAttAcesso] = useState(item.acessos);
    const [isShowingSkeleton, setIsShowingSkeleton] = useState(true);

    const handleClick = () => {
        //fetchs

        setAttAcesso((access) => Number(access) + 1);
    };

    const handleShowImage: ReactEventHandler<HTMLImageElement> = ({ currentTarget }) => {
        currentTarget.style.opacity = "1";
        setIsShowingSkeleton(false);
    };

    return (
        <li>
            <div className={styles["image-container"]}>
                {isShowingSkeleton && <div className={styles.skeleton} />}
                <Image onLoad={handleShowImage} width={1000} height={1000} src={item.src} alt={item.title} />
            </div>
            <Link href={`feed/foto/${item.id}`} prefetch={true} onClick={handleClick}>
                {attAcesso}
            </Link>
        </li>
    );
};

export default FeedPhotosItem;
