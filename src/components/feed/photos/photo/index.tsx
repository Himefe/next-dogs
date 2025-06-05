"use client";

import { ReactEventHandler, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FeedPhoto } from "@/types/feed";
import styles from "../feed-photos.module.css";

type FeedPhotosItemProps = {
    item: FeedPhoto;
};

const FeedPhotosItem = ({ item }: FeedPhotosItemProps) => {
    const [attAcesso, setAttAcesso] = useState(item.acessos);
    const [isShowingSkeleton, setIsShowingSkeleton] = useState(true);

    const { push } = useRouter();

    const handleClick = () => {
        //fetchs

        setAttAcesso((access) => Number(access) + 1);

        push(`feed/foto/${item.id}`);
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
            <span onClick={handleClick}>{attAcesso}</span>
        </li>
    );
};

export default FeedPhotosItem;
