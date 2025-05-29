import { getPhotoAction } from "@/actions/requests/photo";
import { getUserAction } from "@/actions/requests/user";
import FeedModal from "./_components/feed-modal";
import { generatePhotoMetadata } from "@/app/foto/[photoId]/utils";

export type FeedModalPageProps = {
    params: Promise<{ photoId: string }>;
};

export const generateMetadata = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;

    return generatePhotoMetadata(photoId);
};

const FeedModalPage = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;

    const { data: photo } = await getPhotoAction(photoId);
    const { data: user } = await getUserAction();

    return <FeedModal user={user} photo={photo?.photo} comments={photo?.comments} />;
};

export default FeedModalPage;
