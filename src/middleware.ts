import { NextRequest, NextResponse } from "next/server";
import authMiddleware from "@/middlewares/auth";

type MiddlewareHandler = (request: NextRequest) => Promise<NextResponse> | NextResponse;

const routeMiddlewareMap: { routePrefix: string; handler: MiddlewareHandler }[] = [
    { routePrefix: "/conta", handler: authMiddleware },
    { routePrefix: "/login", handler: authMiddleware },
];

export const middleware = async (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    for (const route of routeMiddlewareMap) {
        if (pathname.startsWith(route.routePrefix)) {
            return await route.handler(request);
        }
    }

    return NextResponse.next();
};

export const config = {
    matcher: ["/conta/:path*", "/login/:path*"],
};
