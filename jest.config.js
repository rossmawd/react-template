/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "cypress/e2e/.*\\.spec\\.ts$"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
