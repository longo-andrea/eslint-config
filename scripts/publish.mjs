import fs from 'fs-extra';
import { execSync } from 'child_process';

const publishPackges = async () => {
	const allPackages = await fs.readdir('./packages');
	for (const pkg of allPackages) {
		execSync('npm publish --access public', {
			stdio: 'inherit',
			cwd: path.join('packages', pkg),
		});
	}
};

await publishPackges();
