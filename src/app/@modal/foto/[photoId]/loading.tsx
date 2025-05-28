import styles from "@/components/feed/photos/feed-photos.module.css";
import Loading from "@/app/loading";

const FeedModalLoading = () => {
    return (
        <div className={styles.modal}>
            <Loading />
        </div>
    );
};

export default FeedModalLoading;
