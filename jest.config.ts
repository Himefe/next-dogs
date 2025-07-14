import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css)$": "identity-obj-proxy",
    },
    globals: {
        "ts-jest": {
            tsconfig: {
                jsx: "react-jsx",
            },
        },
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};

export default config;
