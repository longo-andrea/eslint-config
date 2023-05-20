module.exports = {
    overrides: [
        {
            files: ["*.vue"],

            plugins: ["vitest"],

            extends: ["plugin:vue/vue3-recommended", "@longo-andrea/eslint-config-base", "@longo-andrea/eslint-config-typescript"],

            parser: "vue-eslint-parser",
            parserOptions: {
                parser: '@typescript-eslint/parser'
            },

            rules: {
                'no-unused-var': 'off',
                'no-undef': 'off',
                'vue/multi-word-component-names': 'off',
                '@typescript-eslint/no-unused-vars': "off"
            }
        }
    ]
}