import { getPhotoAction } from "@/actions/requests/photo";
import { getUserAction } from "@/actions/requests/user";
import FeedModal from "./components/FeedModal";

type FeedModalPageProps = {
    params: Promise<{ photoId: string }>;
};

const FeedModalPage = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;

    const { data } = await getPhotoAction(photoId);
    const { data: user } = await getUserAction();

    return <FeedModal photo={data?.photo} user={user} comments={data?.comments} />;
};

export default FeedModalPage;
