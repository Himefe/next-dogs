import { getFeedPhotos } from "@/actions/requests/feed";
import { getUserAction } from "@/actions/requests/user";
import Feed from "@/components/feed";
import { Metadata } from "next/dist/types";

export const metadata: Metadata = {
    title: "Next Dogs - Conta",
    description: "Esta é a página de conta do usuário no projeto dogs!",
};

const UserAccountPage = async () => {
    const { data: user } = await getUserAction();
    const { data: photos } = await getFeedPhotos({ page: 1, total: 6, user: user?.username });

    return <Feed photos={photos || []} username={user?.username} />;
};

export default UserAccountPage;
