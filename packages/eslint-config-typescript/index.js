module.exports = {


	extends: [
		'@longo-andrea/eslint-config-base',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
	],

	overrides: [
		{
			files: ["*.ts"],
			plugins: ['@typescript-eslint', 'import'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
            	tsconfigRootDir: process.cwd(),
            	project: true,
          	},
			rules: {
				'@typescript-eslint/no-empty-function': 'off', 
			}

			
		}
	]
}
