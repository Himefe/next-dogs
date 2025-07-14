"use server";

import { apiError, generateResponse } from "@/lib/api";
import { FeedPhoto, FeedPhotoComment } from "@/types/feed";
import { ActionParam } from "./login";
import { cookies } from "next/dist/server/request/cookies";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { revalidateTag } from "next/cache";

export type PhotoResponse = {
    comments: FeedPhotoComment[];
    photo: FeedPhoto;
};

export const getPhotoAction = async (photoId: string) => {
    try {
        const response = await fetch(`${process.env.API_URL}/json/api/photo/${photoId}`, {
            cache: "no-store",
            next: {
                tags: ["photo"],
            },
        });

        return generateResponse<PhotoResponse>({ data: await response.json(), ok: true });
    } catch (error) {
        return apiError(error);
    }
};

export const postPhotoAction = async (...args: ActionParam) => {
    try {
        const token = (await cookies()).get("token")?.value;
        const [, formData] = args;

        const response = await fetch(`${process.env.API_URL}/json/api/photo`, {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response?.json();

        if (!response.ok) {
            throw new Error(data?.message || "Ocorreu um erro ao postar.");
        }

        revalidateTag("feed-photos");
        redirect("/conta");
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }

        return apiError(error);
    }
};

export const postPhotoCommentAction = async (...args: ActionParam) => {
    try {
        const token = (await cookies()).get("token")?.value;
        const [, formData] = args;

        const photoId = formData.get("photoId") as string;
        formData.delete("photoId");

        const comment = formData.get("comment") as string;

        if (!comment) throw new Error("Escreva algum comentário.");

        const response = await fetch(`${process.env.API_URL}/json/api/comment/${photoId}`, {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response?.json();

        if (!response.ok) {
            throw new Error(data?.message || "Ocorreu um erro ao comentar.");
        }

        revalidateTag("photo");

        return generateResponse({ ok: true });
    } catch (error) {
        return apiError(error);
    }
};

export const photoDeleteAction = async (...args: ActionParam) => {
    try {
        const token = (await cookies()).get("token")?.value;
        const [, formData] = args;

        const photoId = formData.get("photoId") as string;

        const response = await fetch(`${process.env.API_URL}/json/api/photo/${photoId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response?.json();

        if (!response.ok) {
            throw new Error(data?.message || "Ocorreu um erro ao deletar.");
        }

        revalidateTag("feed-photos");
    } catch (error) {
        return apiError(error);
    }
};
