"use server";

import { apiError, generateResponse } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { Login } from "@/types/login";
import { z } from "zod/v4";
import { simpleExtractFirstError } from "@/lib/form";
import { loginRegisterSchema } from "@/app/login/cadastrar/_components/form/utils";

export type ActionParam = [state: ReturnType<typeof generateResponse> | undefined, formData: FormData];

export const loginAction = async (...args: ActionParam) => {
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
            throw new Error(data!.message || "Ocorreu um erro ao tentar logar.");
        }

        (await cookies()).set("token", data!.token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 60 * 60 * 24,
        });

        if (data!.token) {
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

export const loginRegisterAction = async (...args: ActionParam) => {
    try {
        const [, formData] = args;

        const raw = Object.fromEntries(formData.entries());
        const schemaValidation = loginRegisterSchema.safeParse(raw);

        if (!schemaValidation.success) {
            const fieldErrors = z.treeifyError(schemaValidation.error).properties;
            return generateResponse({
                ok: false,
                fieldErrors: simpleExtractFirstError(fieldErrors),
            });
        }

        const response = await fetch(`${process.env.API_URL}/json/api/user`, {
            method: "POST",
            body: formData,
        });

        const { data } = generateResponse<Login>({ data: await response.json(), ok: true });

        if (!response.ok) {
            throw new Error(data!.message || "Ocorreu um erro ao tentar registrar.");
        }

        return loginAction(undefined, formData);
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }

        return apiError(error);
    }
};

export const loginPasswordLostAction = async (...args: ActionParam) => {
    const [, formData] = args;

    const login = formData.get("login") as string | null;
    const url = formData.get("url") as string | null;

    try {
        if (!login) throw new Error("Preencha os dados.");

        const response = await fetch(`${process.env.API_URL}/json/api/password/lost`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                login,
                url,
            }),
        });

        const { data } = generateResponse({ data: await response.json(), ok: true });

        if (!response.ok) {
            throw new Error(data?.message || "Ocorreu um erro ao tentar enviar o email de recuperação de senha.");
        }

        return generateResponse({ ok: true });
    } catch (error: unknown) {
        return apiError(error);
    }
};

export const loginPasswordResetAction = async (...args: ActionParam) => {
    const [, formData] = args;

    const login = formData.get("login") as string | null;
    const key = formData.get("key") as string | null;
    const password = formData.get("password") as string | null;

    try {
        const response = await fetch(`${process.env.API_URL}/json/api/password/reset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                login,
                key,
                password,
            }),
        });

        const { data } = generateResponse({ data: await response.json(), ok: true });

        if (!response.ok) {
            throw new Error(data?.message || "Ocorreu um erro ao tentar registrar.");
        }

        return generateResponse({ ok: true });
    } catch (error: unknown) {
        if (isRedirectError(error)) {
            throw error;
        }

        return apiError(error);
    } finally {
        redirect("/login");
    }
};
