"use client";

import { ReactEventHandler, useState } from "react";
import Image from "next/image";
import { FeedPhoto } from "@/types/feed";
import styles from "../feed-photos.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type FeedPhotosItemProps = {
    item: FeedPhoto;
};

const FeedPhotosItem = ({ item }: FeedPhotosItemProps) => {
    const [accesses, setAccesses] = useState(item.acessos);
    const [isShowingSkeleton, setIsShowingSkeleton] = useState(true);

    const pathname = usePathname();

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
            <Link
                href={`${pathname}/foto/${item.id}`}
                prefetch={true}
                onClick={setAccesses.bind(this, (prev) => Number(prev) + 1)}>
                {accesses}
            </Link>
        </li>
    );
};

export default FeedPhotosItem;
