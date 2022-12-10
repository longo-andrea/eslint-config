# Personal ES Lint configurations (@longo-andrea)

Personal ES Lint configuration

-   🧱 Basic ES Lint configuration
-   ⚙️ Typescript specific ES Lint configuration
-   👗 Prettier config, configured to work with ESLint

## Available packages

-   `@longo-andrea/eslint-base`: basic ES Lint configuration
-   `@longo-andrea/eslint-typescript`: extends `@longo-andrea/eslint-base` and add some more rules Typescript's related
-   `@longo-andrea/prettier`: defines Prettier configuration

## Get started

1. Install the packages you want to use

```shell
pnpm add -D eslint @longo-andrea/eslint-base
```

2. Add the configuration on the project, `.eslintrc`:

```js
{
    extends: [ '@longo-andrea/eslint-base' ]
}
```

# License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Andrea Longo](https://github.com/longo-andrea)
