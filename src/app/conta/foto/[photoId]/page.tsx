import { getPhotoAction } from "@/actions/requests/photo";
import { FeedModalPageProps } from "@/app/feed/@modal/(.)foto/[photoId]/page";
import UserAccountFeedContent from "../../_components/feed-content";
import FeedModalWrapper from "@/components/feed/modal/wrapper";

export const generateMetadata = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;
    const { data: photo } = await getPhotoAction(photoId);

    return {
        title: `Next Dogs - Foto ${photo?.photo?.title || ""}`,
    };
};

const UserAccountFeedModalPage = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;

    return (
        <>
            <UserAccountFeedContent />
            <FeedModalWrapper photoId={photoId} />
        </>
    );
};

export default UserAccountFeedModalPage;
