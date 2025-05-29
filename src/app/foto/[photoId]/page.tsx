import FeedModalPage, { FeedModalPageProps } from "@/app/@modal/(.)foto/[photoId]/page";
import { generatePhotoMetadata } from "./utils";
import Home from "@/app/page";

export const generateMetadata = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;

    return generatePhotoMetadata(photoId);
};

const PhotoModalPage = ({ params }: FeedModalPageProps) => {
    return (
        <>
            <Home />
            <FeedModalPage params={params} />
        </>
    );
};

export default PhotoModalPage;
