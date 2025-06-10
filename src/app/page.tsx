import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Next Dogs - Feed",
    description: "Esta é a página de feed do projeto dogs!",
};

export default async function Home() {
    redirect("/feed");
}
