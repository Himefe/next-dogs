import { getPhotoAction } from "@/actions/requests/photo";
import FeedModalPage, { FeedModalPageProps } from "@/app/feed/@modal/(.)foto/[photoId]/page";
import FeedWrapper from "@/components/feed/wrapper";

export const generateMetadata = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;
    const { data: photo } = await getPhotoAction(photoId);

    return {
        title: `Next Dogs - Foto ${photo?.photo?.title || ""}`,
    };
};

const PhotoModalPage = async ({ params }: FeedModalPageProps) => {
    return (
        <>
            <FeedWrapper />
            <FeedModalPage params={params} />
        </>
    );
};

export default PhotoModalPage;
