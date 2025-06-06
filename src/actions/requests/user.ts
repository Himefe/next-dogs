"use server";

import { apiError, generateResponse } from "@/lib/api";
import { User } from "@/types/user";
import { cookies } from "next/headers";

export const getUserAction = async () => {
    try {
        const cookie = await cookies();
        const token = cookie.get("token")?.value;

        if (!token) {
            throw new Error("Token not found");
        }

        const res = await fetch(`${process.env.API_URL}/json/api/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Ocorreu um erro ao processar sua solicitação.");
        }

        return generateResponse<User>({ data: await res.json(), ok: true });
    } catch (error) {
        return apiError(error);
    }
};
