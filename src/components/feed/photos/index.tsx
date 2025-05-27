import { FeedPhoto } from "@/types/feed";
import styles from "../css/feed-photos.module.css";
import FeedPhotosItem from "./item";

type FeedPhotosProps = {
    photos: FeedPhoto[];
};

const FeedPhotos = ({ photos }: FeedPhotosProps) => {
    return (
        <ul className={styles.ulArea}>
            {photos.map((photo) => (
                <FeedPhotosItem item={photo} key={photo.id} />
            ))}
        </ul>
    );
};

export default FeedPhotos;
