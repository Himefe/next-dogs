"use server";

import { apiError, generateResponse } from "@/lib/api";
import { FeedPhoto, FeedPhotoComment } from "@/types/feed";

export type PhotoResponse = {
    comments: FeedPhotoComment[];
    photo: FeedPhoto;
};

export const getPhotoAction = async (photoId: string) => {
    try {
        const response = await fetch(`${process.env.API_URL}/json/api/photo/${photoId}`, {
            cache: "no-store",
        });

        return generateResponse<PhotoResponse>({ data: await response.json(), ok: true });
    } catch (error) {
        return apiError(error);
    }
};
