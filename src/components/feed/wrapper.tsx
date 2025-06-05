import { getFeedPhotos } from "@/actions/requests/feed";
import Feed from "./index";

const FeedWrapper = async () => {
    const { data } = await getFeedPhotos({ page: 1, total: 6 });

    return <Feed photos={data || []} />;
};

export default FeedWrapper;
