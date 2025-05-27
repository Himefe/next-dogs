"use server";

import { apiError, generateResponse } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { revalidateTag } from "next/cache";
import { Login } from "@/types/login";

export const loginAction = async (...args: [state: object, formData: FormData]) => {
    try {
        const [, formData] = args;

        const response = await fetch(`${process.env.API_URL}/json/jwt-auth/v1/token`, {
            method: "POST",
            body: JSON.stringify({
                username: formData.get("username"),
                password: formData.get("password"),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const { data } = generateResponse<Login>({ data: await response.json(), ok: true });

        if (!response.ok) {
            throw new Error(data!.message || "Ocorreu um erro ao processar sua solicitação.");
        }

        (await cookies()).set("token", data!.token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 60 * 60 * 24,
        });

        if (data!.token) {
            revalidateTag("user");
            redirect("/conta");
        }

        return generateResponse({ data, ok: true });
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }

        return apiError(error);
    }
};

export const loginRegisterAction = async (...args: [state: object, formData: FormData]) => {
    try {
        const [, formData] = args;

        const response = await fetch("https://dogsapi.origamid.dev/json/api/user", {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "application/json",
            },
        });

        const { data } = generateResponse<Login>({ data: await response.json(), ok: true });

        if (!response.ok) {
            throw new Error(data!.message || "Ocorreu um erro ao tentar registrar.");
        }

        (await cookies()).set("token", data!.token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 60 * 60 * 24,
        });

        redirect("/conta");
    } catch (error) {
        return apiError(error);
    }
};
