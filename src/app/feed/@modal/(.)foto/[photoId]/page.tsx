import FeedModalWrapper from "./_components/feed-modal/wrapper";

export type FeedModalPageProps = {
    params: Promise<{ photoId: string }>;
};

const FeedModalPage = async ({ params }: FeedModalPageProps) => {
    const { photoId } = await params;

    return <FeedModalWrapper photoId={photoId} />;
};

export default FeedModalPage;
