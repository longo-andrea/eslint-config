module.exports = {
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},

	plugins: ['prettier', 'import', 'n', 'html', 'no-only-tests'],

	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:n/recommended',
		'prettier',
	],

	rules: {
		'prettier/prettier': ['error'],

		// PLUGIN: n
		'n/no-unsupported-features/es-syntax': 'off',
		'n/no-missing-import': 'off',
	},

	overrides: [
		{
			files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
			rules: {
				// PLUGIN: no-only-tests
				'no-only-tests/no-only-tests': 'error',
			},
		},
	],

	settings: {
		'html/html-extensions': ['.html'],
		'import/resolver': {
			node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
		},
	},
};
