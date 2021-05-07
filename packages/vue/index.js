module.exports = {
    overrides: [
      {
        files: ['*.vue'],
        parser: 'vue-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
        },
      },
    ],
    extends: [
        '@longo-andrea/eslint-config-typescript',
        'plugin:vue/vue3-recommended',
    ],
  }