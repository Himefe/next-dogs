import Feed from "./_feed";
import { getFeedPhotos } from "@/actions/feed";

export default async function Home() {
    const { data } = await getFeedPhotos({ page: 1, total: 6 });

    return (
        <section>
            <Feed photos={data || []} />
        </section>
    );
}
