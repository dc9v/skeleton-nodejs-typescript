import type { Config } from "@jest/types";

const config: Config.InitialOptions =
{
  preset: "ts-jest",
  testEnvironment: 'node',
  testMatch: [ '<rootDir>/test/**/*.ts' ],
  testPathIgnorePatterns: [ '/node_modules/' ],
  modulePaths: [ "<rootDir>/src/" ],
  moduleNameMapper:
  {
    "^\/src\/(.*)$": "<rootDir>/src/$1"
  }
}

export default config