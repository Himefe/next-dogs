import type { Config } from "jest";

const config: Config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|tsx)$": ["babel-jest", { configFile: "./jest.babel.config.js" }],
    },
    moduleNameMapper: {
        "\\.(css)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};

export default config;
