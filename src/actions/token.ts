"use server";

import { cookies } from "next/headers";

export const getTokenAction = async () => {
    const token = (await cookies()).get("token")?.value;

    return token;
};
