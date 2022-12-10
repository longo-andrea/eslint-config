import { execSync } from 'child_process';

execSync('pnpm --no-git-checks -r publish --access public', {
	stdio: 'inherit',
});
