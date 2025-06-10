import { getPhotoAction } from "@/actions/requests/photo";
import { getUserAction } from "@/actions/requests/user";
import FeedModal from "./_components/feed-modal";
import PhotoProviderWrapper from "./_contexts/photo/wrapper";

export type FeedModalPageProps = {
    params: Promise<{ photoId: string }>;
};

const FeedModalPage = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;

    const { data: photo } = await getPhotoAction(photoId);
    const { data: user } = await getUserAction();

    return (
        <PhotoProviderWrapper value={{ photo: photo?.photo, comments: photo?.comments || [], user }}>
            <FeedModal />
        </PhotoProviderWrapper>
    );
};

export default FeedModalPage;
