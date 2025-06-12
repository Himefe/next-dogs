import getStats from "@/actions/requests/stats";
import dynamic from "next/dynamic";
import { StatisticsContentProps } from "./_components/content";
import { Metadata } from "next/dist/types";
import Loading from "@/app/loading";

const StatisticsContent = dynamic(() => import("./_components/content"), {
    loading: () => <Loading />,
});

export const metadata: Metadata = {
    title: "Next Dogs - Estatísticas",
    description: "Esta é a página de estatísticas do usuário no projeto dogs!",
};

const StatisticsPage = async () => {
    const { data } = await getStats();

    const { graph, total } = (data || []).reduce<StatisticsContentProps>(
        (acc, curr) => {
            acc.graph.push({ x: curr.title, y: Number(curr.acessos) });
            acc.total += Number(curr.acessos);

            return acc;
        },
        { graph: [], total: 0 }
    );

    return (
        <section className="anime-left">
            <StatisticsContent graph={graph} total={total} />
        </section>
    );
};

export default StatisticsPage;
