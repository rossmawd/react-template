module.exports = {
  // other Jest configuration options...
  testPathIgnorePatterns: ['/node_modules/', 'cypress/e2e/.*\\.spec\\.ts$'],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
};
