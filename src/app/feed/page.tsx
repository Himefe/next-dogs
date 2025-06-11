import FeedWrapper from "@/components/feed/wrapper";
import { Metadata } from "next/dist/types";

export const metadata: Metadata = {
    title: "Next Dogs - Feed",
    description: "Esta é a página de feed do projeto dogs!",
};

export const dynamic = "force-dynamic";

const FeedPage = () => {
    return <FeedWrapper />;
};

export default FeedPage;
