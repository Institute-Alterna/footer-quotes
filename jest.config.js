/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // Ensures Jest looks for tests in the src folder
  testMatch: ["**/*.test.ts"],
};
