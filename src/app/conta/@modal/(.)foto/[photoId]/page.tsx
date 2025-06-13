import FeedModalWrapper from "@/app/feed/@modal/(.)foto/[photoId]/_components/feed-modal/wrapper";
import { FeedModalPageProps } from "@/app/feed/@modal/(.)foto/[photoId]/page";
import React from "react";

const UserAccountFeedPhotoModalPage = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;

    return <FeedModalWrapper photoId={photoId} />;
};

export default UserAccountFeedPhotoModalPage;
