import { execSync } from 'child_process';

execSync('pnpm -r publish --access public', {
	stdio: 'inherit',
});
