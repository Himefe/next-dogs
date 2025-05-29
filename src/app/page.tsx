import { Metadata } from "next";
import Feed from "../components/feed";
import { getFeedPhotos } from "@/actions/requests/feed";

export const metadata: Metadata = {
    title: "Next Dogs - Feed",
    description: "Esta é a página de feed do projeto dogs!",
};

export default async function Home() {
    const { data } = await getFeedPhotos({ page: 1, total: 6 });

    return <Feed photos={data || []} />;
}
