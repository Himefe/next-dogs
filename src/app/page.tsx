import { Metadata } from "next";
import FeedWrapper from "@/components/feed/wrapper";

export const metadata: Metadata = {
    title: "Next Dogs - Feed",
    description: "Esta é a página de feed do projeto dogs!",
};

export default async function Home() {
    return <FeedWrapper />;
}
