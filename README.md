# Wedding App

## App Setting

### 1. Package Manager

This project use yarn berry (pnp).

```json
 "packageManager": "yarn@4.0.2"
```

#### command

```bash
$ yarn set version berry
$ yarn install
```

#### ZipFS Setting

1. Install vscode Extension - ZipFS
   <img width="685" alt="image" src="https://github.com/devKangMinHyeok/wedding_example/assets/44657722/f4642d4a-b24a-467f-84b3-5d95e0d46bf9">

2. yarn setting

```bash
$ yarn dlx @yarnpkg/sdks vscode
```

3. typescript version setting for vscode

- go to typescript file
- cmd + p
- `> select typescript version` & `Use Workspace Version`
  <img width="593" alt="image" src="https://github.com/devKangMinHyeok/wedding_example/assets/44657722/b521af2a-14d6-49c8-ab49-7228de8c7070">

#### gitignore

[Add below paths to gitignore, to use zero-install](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)

```
# yarn zero install

.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

#### Resolve @testing-library confliction

```bash
$ yarn remove @testing-library/jest-dom
```

```bash
$ yarn add -D @types/testing-library__jest-dom @testing-library/jest-dom
```

### 2. Code Formatter & Linter

#### ESLint Install with plugin, config

```bash
$ yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-config-react-app
```

#### make .eslintrc.json & .prettierrc

if `package.json` have `eslintConfig` like below, remove them.

```
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```

create .eslintrc.json at root.

```json
{
  "extends": ["react-app", "react-app/jest", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error" // Tells ESLint to run the prettier plugin
  }
}
```

create .prettierrc at root.

```json
{
  "useTabs": false,
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "lf",
  "semi": false,
  "arrowParens": "always"
}
```

#### vscode json setting

1. `cmd + ,`

2. open json setting
   <img width="1169" alt="image" src="https://github.com/devKangMinHyeok/wedding_example/assets/44657722/ee8a5af3-4023-47d8-aa06-874eabd416c3">

3. add `source.fixAll.eslint` config to `editor.codeActionsOnSave`

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
```

#### vscode integration

```bash
$ yarn dlx @yarnpkg/sdks vscode
```

#### add script to package.json

```json
"scripts" : {
  // ...
  "lint" : "eslint \"scr/**/*.{js,jsx,ts,tsx}\"",
  "lint:fix" : "eslint --fix \"scr/**/*.{js,jsx,ts,tsx}\"",
}
```

### 3. Craco

[Craco](https://craco.js.org/) is configuration overide Tool for CRA.

#### Craco Install

```bash
$ yarn add -D @craco/craco
```

```bash
$ yarn add -D craco-alias
```

#### tsconfig.paths.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
```

#### craco.config.js

```js
const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
}
```

#### extends tsconfig for tsconfig.paths.json

```json
{
  "extends": "./tsconfig.paths.json",
  // ...
  "include": ["src", "tsconfig.paths.json"]
}
```

### 4. SCSS

#### SCSS Install

```bash
$ yarn add classnames sass
```

#### Make new directory for to src & global setting

```
src
ㄴ scss
  ㄴ global.scss
```

global.scss

```scss
@charset "utf-8";

:root {
  --red: #ff0000;
  --black: #000000;
  --brown: #a52a2a;
  --begie: #f5f5dc;
}
```

index.tsx

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './scss/global.scss' // Add This

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 5. JSON Server

[Json server](https://www.npmjs.com/package/json-server) is fake server from json when mock api is needed.

#### Install JSON Server

```bash
$ yarn add -D json-server
```

#### create db.json at root

db.json

```json
{
  "posts": [{ "id": 1, "title": "json-server", "author": "typicode" }],
  "comments": [{ "id": 1, "body": "some comment", "postId": 1 }],
  "profile": { "name": "typicode" }
}
```

#### Add New script for run json-server

```json
"scripts": {
    // ...
    "dev:db" : "json-server --watch db.json --port=8888"
  },
```

#### Many Features

- [pagination](https://www.npmjs.com/package/json-server#paginate)
- [Filtering](https://www.npmjs.com/package/json-server#filter)
- [Sort](https://www.npmjs.com/package/json-server#sort)
- [Slice](https://www.npmjs.com/package/json-server#slice)

- [Remote schema](https://www.npmjs.com/package/json-server#remote-schema)

## Implementation

### 1. Font

#### Formats

![Alt text](https://github.com/devKangMinHyeok/wedding_example/assets/44657722/39ec8af8-6864-4f6d-bc79-c744337da57e)

참고자료 :
[웹에서 사용되는 font에 대해서 좀 알아보자](https://www.rldnd.net/font-)

#### font 적용 방법

1. 웹 font 서비스 이용

```html
<link href="font서비스" />
```

장점 : 추가 제거등의 관리가 쉬움

단점 : 외부 서비스에 의존해야 함. 외부 서비스에서 폰트를 가져오는 동작이 느려지면, 초기 로딩 속도에도 지장을 줄 수 있음.

2. font 다운로드

```css
@font-face {
  font-family: 'font이름';
  src: url('font경로');
}
```

> **네이버 폰트 찾기** : https://hangeul.naver.com/font/nanum
>
> **폰트 파일 확장자 변환** : 네이버 폰트를 다운 받으면, ttf로 다운 받게된다. 이는 woff나 woff2보다 용량이 커서, woff로 변환하고 싶다면, https://cloudconvert.com/ttf-converter 에서 ttf에서 woff와 woff2로 변환할 수 있다.

> 폰트 파일은 src 내부에 asset > fonts 에 넣어줌.
>
> 이 경우에, 번들링에 포함되기 때문에 최적화 효과.

[commit으로 확인하기 &rarr;](https://github.com/devKangMinHyeok/wedding_example/commit/232a2bff68fc7cb92df80533dbd10b26240c1cd8)

## Features

### loading, error 처리

- fetch 사용시 loading, error state 관리
- 공통 컴포넌트 폴더
- loading, error 컴포넌트
- scss keyframe
- svg icon
