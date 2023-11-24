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
