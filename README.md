skeleton-nodejs-typescript
===

- [Korean](https://github.com/makesomesparks/start-nodejs-typescript/blob/main/README.ko.md) 

- [English](https://github.com/makesomesparks/start-nodejs-typescript)

## What is this project for?

This project can use as skeleton code to start your Nodejs-Typescript project authoring quickly.

And this project is a minimal code, So authored execution methods and dependencies libs.

However, this code was authored for my convenience, not commonly used.

## 1. Start

```bash
git clone https://github.com/makesomesparks/start-nodejs-typescript-project

cd start-nodejs-typescript-project

npm i

npm run test

npm start
```

## 2. Package Dependencies

### 2.1. dependencies

* [yaml](https://github.com/eemeli/yaml)

### 2.2. devDependencies

* [typescript](https://github.com/Microsoft/TypeScript)

* [tsconfig-paths](https://github.com/dividab/tsconfig-paths)

* [ts-node](https://github.com/TypeStrong/ts-node)

* [ts-jest](https://github.com/kulshekhar/ts-jest)

* [jest](https://github.com/facebook/jest)

* [@types/node](https://nodejs.org/)

* [@types/jest](https://jestjs.io/)

# 3. TypeScript configuration

For my convenience, Author only the main parts that have been modified.

**`tsconfig.json`**

```json
// ...
{
  "compilerOptions":
  {
    "allowJs": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "resolveJsonModule": true,

    "lib": [ "es5", "es6", "es7", "esnext" ],
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ESNext"

    "baseUrl": ".",
    "paths":
    {
      "/src/*": [ "src/*" ],
    },

    "outDir": "build",
    "sourceMap": true,
// ...
```

## 4. TDD configuration- jest

| ⚠️ IMPORTANT: This configuration does not set to generally use test file conventions |
| :----------------------------------------------------------------------------------: |



> `__test__`, `*.spec.ts`, etc. are not used.

**`jest.config.ts`**

```ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions =
{
  preset: "ts-jest",
  testEnvironment: 'node',
  testMatch: [ '<rootDir>/test/**/*.ts' ],
  testPathIgnorePatterns: [ '/node_modules/' ], // Generally using: testMatch: [ '<rootDir>/__test__/**/*.spec.ts|js' ]
  modulePaths: [ "<rootDir>/src/" ],
  moduleNameMapper:
  {
    "^\/src\/(.*)$": "<rootDir>/src/$1"
  }
}

export default config
```

author: Taegyun, Ko <dev📧balsa.to>

