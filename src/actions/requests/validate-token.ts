"use server";

import { apiError, generateResponse } from "@/lib/api";
import { cookies } from "next/headers";

const validateTokenAction = async () => {
    try {
        const cookie = await cookies();

        const token = cookie.get("token")?.value;
        if (!token) throw new Error("Acesso negado.");

        const response = await fetch(`${process.env.API_URL}/json/jwt-auth/v1/token/validate`, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + token,
            },
        });

        if (!response.ok) throw new Error("Erro ao validar token.");

        return generateResponse({ data: null, ok: true });
    } catch (error) {
        return apiError(error);
    }
};

export default validateTokenAction;
