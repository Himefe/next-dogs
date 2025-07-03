import PhotoProviderWrapper from "../../../contexts/photo/wrapper";
import FeedModal from "./index";
import { getPhotoAction } from "@/actions/requests/photo";
import { getUserAction } from "@/actions/requests/user";

type FeedModalWrapperProps = {
    photoId?: string;
};

const FeedModalWrapper = async ({ photoId }: FeedModalWrapperProps) => {
    const { data: photo } = await getPhotoAction(photoId!);
    const { data: user } = await getUserAction();

    return (
        <PhotoProviderWrapper value={{ photo: photo?.photo, comments: photo?.comments, user }}>
            <FeedModal />
        </PhotoProviderWrapper>
    );
};

export default FeedModalWrapper;
