"use server";

import { apiError, generateResponse } from "@/lib/api";
import { FeedPhoto } from "@/types/feed";

type FeedPhotosParam = {
    page: number;
    total: number;
    user?: string;
};

export const getFeedPhotos = async ({ page, total, user }: FeedPhotosParam) => {
    try {
        const response = await fetch(`${process.env.API_URL}/json/api/photo/?_page=${page}&_total=${total}&_user=${user}`, {
            cache: "no-store",
        });

        if (!response.ok) throw new Error("Ocorreu um erro ao buscar as fotos do feed.");

        return generateResponse<FeedPhoto[]>({ data: await response.json(), ok: true });
    } catch (error) {
        return apiError(error);
    }
};
