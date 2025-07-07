import FeedModalWrapper from "@/components/feed/modal/wrapper";
import { FeedModalPageProps } from "@/app/feed/@modal/(.)foto/[photoId]/page";

const UserAccountFeedPhotoModalPage = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;

    return <FeedModalWrapper photoId={photoId} />;
};

export default UserAccountFeedPhotoModalPage;
