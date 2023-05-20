# @longo-andrea linters configuration

## Packages

This project is a monorepo that expose configurations for different linters:

    - 👗 Prettier formatter
    - 🧱 Several ESLint configurations to use for different types of projects

### Prettier

The package `@longo-andrea/prettier` contains the global Prettier configuration.
To apply this configuration on your client app:

1. Install `@longo-andrea/prettier` dependency
2. Install `prettier`
3. Create a `.prettierrc.js` file, with:
    ```
    module.exports = {
        ...require('@longo-andrea/prettier'),
    }
    ```
4. Then you just need to add the "format" script to your `package.json`, configure you editor, configure `pretty-quick` or whatever you want.

### ESLint

There are several eslint configuration available:

-   `@longo-andrea/eslint-config-base`: provide the basic eslint rules that can fit basically every project
-   `@longo-andrea/eslint-config-vue`: provide Vue & its ecosystem related rules
-   `@longo-andrea/eslint-config-typescript`: provide TypeScript related rules

To apply one of the above configurations on your client app:

1. Install `@longo-andrea/eslint-config-<CONFIG_NAME>` dependency
2. Install `eslint`
3. Create a `.eslintrc` file, with:
    ```
    {
        "extends": ["@longo-andrea/eslint-config-<CONFIG_NAME>"],
    }
    ```
4. Then you just need to add the "lint" script to your `package.json`, configure you editor, configure `lint-staged` or whatever you want.

# License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Andrea Longo](https://github.com/longo-andrea)
