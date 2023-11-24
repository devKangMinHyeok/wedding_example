# Wedding App

## Package Manager

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

## Code Formatter & Linter

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

## Craco

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

## SCSS

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
