import type { Config } from "jest";

const config: Config = {
  // Use ts-jest to convert TypeScript before Jest runs the tests.
  preset: "ts-jest",

  // Provide browser features such as document and buttons.
  testEnvironment: "jsdom",

  // Load the extra DOM matchers such as toBeInTheDocument.
  setupFilesAfterEnv: ["@testing-library/jest-dom"],

  // The root tsconfig.json only has project references, so give ts-jest
  // the compiler options it needs for JSX and the Jest types.
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
          esModuleInterop: true,
          types: ["jest", "@testing-library/jest-dom"],
        },
      },
    ],
  },
};

export default config;
