"use server";

import { apiError, generateResponse } from "@/lib/api";
import { cookies } from "next/headers";

export type StatsData = {
    id: number;
    title: string;
    acessos: string;
};

const getStats = async () => {
    try {
        const token = (await cookies()).get("token")?.value;
        if (!token) throw new Error("Acesso negado.");

        const response = await fetch(`${process.env.API_URL}/json/api/stats`, {
            headers: {
                Authorization: "Bearer " + token,
            },
            next: {
                revalidate: 60,
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar os dados.");
        }

        return generateResponse<StatsData[]>({ data: await response.json(), ok: true });
    } catch (error) {
        return apiError(error);
    }
};

export default getStats;
