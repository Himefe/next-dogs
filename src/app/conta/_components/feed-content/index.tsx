import { getFeedPhotos } from "@/actions/requests/feed";
import { getUserAction } from "@/actions/requests/user";
import stylesButton from "@/components/core/button/button.module.css";
import styles from "../../user-account.module.css";
import Feed from "@/components/feed";
import Link from "next/dist/client/link";

const UserAccountFeedContent = async () => {
    const { data: user } = await getUserAction();
    const { data: photos } = await getFeedPhotos({ page: 1, total: 6, user: user?.username });

    return (
        <>
            {photos?.length ? (
                <Feed photos={photos} username={user?.username} />
            ) : (
                <div>
                    <p className={styles["no-photos"]}>Nenhuma foto encontrada.</p>
                    <Link href={"/conta/postar"} className={stylesButton.button} style={{ display: "inline-block" }}>
                        Postar foto
                    </Link>
                </div>
            )}
        </>
    );
};

export default UserAccountFeedContent;
