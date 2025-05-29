import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dogsapi.origamid.dev",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
