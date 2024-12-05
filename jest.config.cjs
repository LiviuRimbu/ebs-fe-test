module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom", // Use the installed jsdom environment
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"], // Setup for jest-fetch-mock
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    transform: {
        "^.+\\.tsx?$": "ts-jest", // Use ts-jest for TypeScript files
    },
    moduleNameMapper: {
        "\\.(css|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
    },
};
