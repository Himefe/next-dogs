import { getFeedPhotos } from "@/actions/requests/feed";
import Feed from "./index";

const FeedWrapper = async () => {
    const { data } = await getFeedPhotos({ page: 1, total: 6 });

    return (
        <div className="container">
            <Feed photos={data || []} />
        </div>
    );
};

export default FeedWrapper;
