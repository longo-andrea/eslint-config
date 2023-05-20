module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},

	extends: ['plugin:import/recommended', 'prettier'],

	plugins: ['html', 'n', 'no-only-tests', 'unused-imports', 'prettier'],

	settings: {
		'import/resolver': {
			node: { extensions: ['.js', '.mjs'] },
		},
	},

	rules: {
		// `import` rules
		'import/first': 'error',
		'import/no-mutable-exports': 'error',
		'import/no-unresolved': 'off',
		'import/no-absolute-path': 'off',
		'import/newline-after-import': ['error', { count: 1 }],
		'import/no-named-as-default-member': 'off',
		'import/no-named-as-default': 'off',
		'import/namespace': 'off',

		// `n` rules
		'n/handle-callback-err': ['error', '^(err|error)$'],
		'n/no-callback-literal': 'error',
		'n/no-deprecated-api': 'error',
		'n/no-exports-assign': 'error',
		'n/no-new-require': 'error',
		'n/no-path-concat': 'error',
		'n/process-exit-as-throw': 'error',

		// `unused-imports`
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],

		// General rules
		'sort-imports': 'off',
		quotes: ['error', 'single'],
		'quote-props': ['error', 'consistent-as-needed'],
		'no-param-reassign': 'off',
		'array-bracket-spacing': ['error', 'never'],
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'block-spacing': ['error', 'always'],
		camelcase: 'off',
		'comma-spacing': ['error', { before: false, after: true }],
		'no-constant-condition': 'warn',
		'no-debugger': 'error',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-cond-assign': ['error', 'always'],
		'func-call-spacing': ['off', 'never'],
		'key-spacing': ['error', { beforeColon: false, afterColon: true }],
		'no-restricted-syntax': [
			'error',
			'DebuggerStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'object-curly-spacing': ['error', 'always'],
		'no-return-await': 'off',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'consistent-return': 'off',
		complexity: ['off', 11],
		eqeqeq: ['error', 'smart'],
		'no-alert': 'warn',
		'no-case-declarations': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-with': 'error',
		'no-void': 'error',
		'no-useless-escape': 'off',
		'no-invalid-this': 'error',
		'vars-on-top': 'error',
		'require-await': 'off',
		'no-return-assign': 'off',
		'operator-linebreak': ['error', 'before'],
		'max-statements-per-line': ['error', { max: 1 }],
		'no-use-before-define': [
			'error',
			{ functions: false, classes: false, variables: true },
		],
		'no-var': 'error',
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
				ignoreReadBeforeAssign: true,
			},
		],
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		'object-shorthand': [
			'error',
			'always',
			{
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],
		'prefer-exponentiation-operator': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'template-curly-spacing': 'error',
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		'generator-star-spacing': 'off',
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					markers: ['/'],
					exceptions: ['/', '#'],
				},
				block: {
					markers: ['!'],
					exceptions: ['*'],
					balanced: true,
				},
			},
		],
	},
}
