"use client";

import { FeedPhoto } from "@/types/feed";
import styles from "./feed-photos.module.css";
import FeedPhotosItem from "./photo";

type FeedPhotosProps = {
    photos: FeedPhoto[];
};

const FeedPhotos = ({ photos }: FeedPhotosProps) => {
    return (
        <ul className={styles["ul-area"]}>
            {photos.map((photo) => (
                <FeedPhotosItem item={photo} key={photo.id} />
            ))}
        </ul>
    );
};

export default FeedPhotos;
