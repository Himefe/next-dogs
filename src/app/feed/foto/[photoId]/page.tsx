import { getPhotoAction } from "@/actions/requests/photo";
import { FeedModalPageProps } from "@/app/feed/@modal/(.)foto/[photoId]/page";
import FeedWrapper from "@/app/feed/_components/wrapper";
import FeedModalWrapper from "../../@modal/(.)foto/[photoId]/_components/feed-modal/wrapper";

export const generateMetadata = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;
    const { data: photo } = await getPhotoAction(photoId);

    return {
        title: `Next Dogs - Foto ${photo?.photo?.title || ""}`,
    };
};

const FeedPhotoModalPage = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;

    return (
        <>
            <FeedWrapper />
            <FeedModalWrapper photoId={photoId} />
        </>
    );
};

export default FeedPhotoModalPage;
