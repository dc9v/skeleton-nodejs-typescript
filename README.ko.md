skeleton-nodejs-typescript
===

## 이 프로젝트는? (What is this project for?)

이 프로젝트를 다운로드 받아 즉시 Nodejs Typescript 프로젝트를 시작할 수 있는 스켈리톤 코드로 사용 할 수 있습니다.

최소한의 코드와 실행방법만을 제공합니다.

하지만 이것은 공통적으로 사용하는 것이 아닌 제가 편하게 만든 코드입니다.

## 1. 시작하기

```bash
git clone https://github.com/makesomesparks/start-nodejs-typescript

cd start-nodejs-typescript-project

npm i

npm run test

npm start

# 자세한 사항은 package.json - scripts를 확인하세요
```

## 2. 종속된 패키지 목록

패키지의 버전 등은 `package.json`을 확인하세요.

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

# 3. TypeScript 설정

변경 추가한 주요 부분만 작성합니다.

**`tsconfig.json`**

```json
/**
  *  - esModuleInterop: 라이브러리 로드 시 requie보다는 import만 사용해서 작성
  *                     e.g. import * as Utilities from "..."
  *  - allowJs: 간혹 타 라이브러리를 사용할때 js로 작성되어 있는 것을 사용하기 위해 사용
  *  - baseUrl, paths: /src 를 소스코드 문서 루트라고 정의하고 작성함.
  *                     e.g. import NameType from "/src/definitions/NameType";
  *  - emitDecoratorMetadata, experimentalDecorators: decorator를 사용하기 위해(reflect포함).
  *  - resolveJsonModule: 간혹 json파일을 import 하는 경우가 있어서 사용.
  *  - outDir: dist보다는 build가 왠지 더 친숙해서...
  *
  */
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

## 4. 테스트 설정 - jest


이 설정은 대체적으로 사용하고 있는 test 파일 규칙을 따르지 않고 있습니다.

> `__test__`, `*.spec.ts` 등을 사용하지 않게 설정되어 있습니다.

**`jest.config.ts`**

```ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions =
{
  preset: "ts-jest",
  testEnvironment: 'node',
  testMatch: [ '<rootDir>/test/**/*.ts' ],
  testPathIgnorePatterns: [ '/node_modules/' ], // Usually using: testMatch: [ '<rootDir>/__test__/**/*.spec.ts|js' ]
  modulePaths: [ "<rootDir>/src/" ],
  moduleNameMapper:
  {
    "^\/src\/(.*)$": "<rootDir>/src/$1"
  }
}

export default config
```
