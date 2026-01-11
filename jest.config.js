const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^d3$": "<rootDir>/__mocks__/d3.js",
  },
  // Match test files in __tests__ directories OR files with .test/.spec suffix anywhere
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/*.(test|spec).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/__fixtures__/"],
  collectCoverageFrom: ["app/**/*.{js,jsx,ts,tsx}", "!app/**/*.d.ts", "!app/layout.tsx", "!app/page.tsx"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
