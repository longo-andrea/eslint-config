module.exports = {
    env: {
      es6: true,
      browser: true,
      node: true,
    },
    extends: [
        'standard',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:unicorn/recommended'
    ],
    plugins: [ 'promise', 'unicorn' ],
    settings: {
        'import/resolver': {
          node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
        },
    },
    rules: {
        // Basic => https://eslint.org/docs/rules/
        'no-await-in-loop': 'warn',
        'no-cond-assign': ['error', 'always'],
        'no-debugger': 'off',
        'no-console': 'off',
        'no-constant-condition': 'warn',
        'no-dupe-args': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-empty': 'error',
        'curly': ['error', 'multi-or-nest', 'consistent'],
        'eqeqeq': ["error", "always"],
        'no-empty-function': 'warn',
        'no-multi-spaces': 'warn',
        'no-redeclare': 'error',
        'no-return-await': 'warn',
        'no-self-assign': 'error',
        'no-unused-expressions': 'warn',
        'require-await': 'error',
        'no-undef': 'error',
        'no-unused-vars': 'warn',
        'array-bracket-newline': ["error", { "multiline": true, "minItems": 3 }],
        'array-bracket-spacing': ["error", "always", { "singleValue": true, "objectsInArrays": true, "arraysInArrays": true }],
        'block-spacing': ["error", "always"],
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'camelcase': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'indent': ["error", 4, { "SwitchCase": 1 }],
        'keyword-spacing': ['error',
          {
            overrides: {
              import: { before: true, after: true }
            }
          }
        ],
        'max-len': ["warn", { "code": 120 }],
        'max-lines-per-function': ['warn', 30],
        'max-params': ["warn", 3],
        'no-plusplus': "error",
        'no-trailing-spaces': "warn",
        'no-whitespace-before-property': "error",
        'object-curly-spacing': ["error", "never"],
        'operator-linebreak': ['error', 'before'],
        'semi': ['error', 'never'],
        'arrow-body-style': ["error", "as-needed"],
        'arrow-parens': ["error", "always"],
        'arrow-spacing': ["error", { "before": true, "after": true }],
        'no-const-assign': "error",
        'no-var': "error",
        'prefer-arrow-callback': ["error", { allowNamedFunctions: false, allowUnboundThis: true, }],
        'prefer-const': ["error", { destructuring: "any", ignoreReadBeforeAssign: true }],
        'prefer-spread': "error",
        'prefer-template': "error",
        'template-curly-spacing': ["error", "never"],

        // import => https://github.com/benmosher/eslint-plugin-import
        'import/no-absolute-path': 'off',
        'import/order': 'error',
        'import/first': 'error',
        'import/no-self-import': 'error',
        'import/no-cycle': 'error',
        'import/exports-last': 'error',
        'import/no-duplicates': 'error',
        'import/prefer-default-export': 'error',

        // promise => https://github.com/xjamundx/eslint-plugin-promise
        'promise/catch-or-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/always-return': 'error',
        'promise/no-native': 'off',
        'promise/no-nesting': 'error',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'warn',
        'promise/avoid-new': 'off',
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'warn',
        'promise/valid-params': 'error',
        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'error',
        
        // unicorn => https://github.com/sindresorhus/eslint-plugin-unicorn
        'unicorn/no-null': 'off',
        'unicorn/filename-case': ['error',
          {
            'case': 'camelCase'
          }
        ]
    }
  }