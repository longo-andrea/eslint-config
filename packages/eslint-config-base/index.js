module.exports = {
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},

	plugins: ['prettier', 'import', 'n', 'html', 'no-only-tests'],

	extends: ['prettier', 'plugin:import/recommended', 'plugin:n/recommended'],

	rules: {
		'prettier/prettier': ['error'],
		'no-only-tests/no-only-tests': 'error',
	},

	overrides: [
		{
			files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
			rules: {
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
