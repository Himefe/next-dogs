import { getFeedPhotos } from "@/actions/requests/feed";
import { getUserAction } from "@/actions/requests/user";
import Feed from "@/components/feed";
import Link from "next/dist/client/link";
import { Metadata } from "next/dist/types";
import stylesButton from "@/components/login/button/button.module.css";
import styles from "./user-account.module.css";

export const metadata: Metadata = {
    title: "Next Dogs - Conta",
    description: "Esta é a página de conta do usuário no projeto dogs!",
};

const UserAccountPage = async () => {
    const { data: user } = await getUserAction();
    const { data: photos } = await getFeedPhotos({ page: 1, total: 6, user: user?.username });

    return (
        <>
            {!!photos?.length ? (
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

export default UserAccountPage;
