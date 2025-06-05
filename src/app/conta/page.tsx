import { getFeedPhotos } from "@/actions/requests/feed";
import { getUserAction } from "@/actions/requests/user";
import Feed from "@/components/feed";

const UserAccountPage = async () => {
    const { data: user } = await getUserAction();
    const { data: photos } = await getFeedPhotos({ page: 1, total: 6, user: user?.id.toString() });

    return <Feed photos={photos || []} userId={user?.id.toString()} />;
};

export default UserAccountPage;
