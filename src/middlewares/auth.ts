import validateTokenAction from "@/actions/requests/validate-token";
import { NextRequest, NextResponse } from "next/server";

const authMiddleware = async (request: NextRequest) => {
    const token = request.cookies.get("token")?.value;
    const { ok } = await validateTokenAction();
    const isAuthenticated = token && ok;

    if (!isAuthenticated && request.nextUrl.pathname.startsWith("/conta")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (isAuthenticated && request.nextUrl.pathname.startsWith("/login")) {
        return NextResponse.redirect(new URL("/conta", request.url));
    }

    return NextResponse.next();
};

export default authMiddleware;
