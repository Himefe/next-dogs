import { getFeedPhotos } from "@/actions/requests/feed";
import Feed from "@/components/feed";

type ProfilePageProps = {
    params: Promise<{
        username: string;
    }>;
};

export const generateMetadata = async ({ params }: ProfilePageProps) => {
    const { username } = await params;

    return {
        title: `Next Dogs - ${username}`,
    };
};

const ProfilePage = async ({ params }: ProfilePageProps) => {
    const { username } = await params;

    const { data: photos } = await getFeedPhotos({ page: 1, total: 6, user: username });

    return (
        <div className="container">
            <h1 className="title">{username}</h1>
            <Feed photos={photos || []} username={username} />
        </div>
    );
};

export default ProfilePage;
