import glob from 'glob';
import fs from 'fs-extra';
import { execSync } from 'child_process';

const bumpVersion = async version => {
	// Update version on root package.json
	const rootPakcageJSON = await fs.readFile('package.json');
	const newRootPackageJSON = JSON.stringify(
		{
			...JSON.parse(rootPakcageJSON),
			version,
		},
		null,
		'\t',
	);
	await fs.writeFile('package.json', newRootPackageJSON);

	// Update version on all package.json
	const files = glob.sync('packages/**/package.json', {
		ignore: 'packages/**/node_modules/**/package.json',
	});
	for (const file of files) {
		const packageJSON = await fs.readFile(file);
		const newPackageJSON = JSON.stringify(
			{
				...JSON.parse(packageJSON),
				version,
			},
			null,
			4,
		);
		await fs.writeFile(file, newPackageJSON);
	}
};

const copyRequiredFiles = async () => {
	const allPackages = await fs.readdir('./packages');
	for (const pkg of allPackages) {
		// We need to copy README and LICENSE in all sub-packages
		await fs.copy('./README.md', `./packages/${pkg}/README.md`);
		await fs.copy('./LICENSE.md', `./packages/${pkg}/LICENSE.md`);
	}
};

const updatePackagesInformation = async version => {
	await bumpVersion(version);
	await copyRequiredFiles();
};

const getVersion = args => {
	const versionIndex = args.indexOf('--version');
	if (versionIndex > -1) {
		return process.argv[versionIndex + 1];
	}

	return null;
};

// Retrieve new version
const version = getVersion(process.argv);
if (!version) {
	throw new Error('You must provide a value for --version argument');
}

// Bump version and copy README, LICENSE in all packages
await updatePackagesInformation(version);

// Format the code
execSync('pnpm format', { stdio: 'inherit' });

// State, commit, tag and push
execSync('git add .', { stdio: 'inherit' });
execSync(`git commit -m "chore: release version: ${version}"`, {
	stdio: 'inherit',
});
execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' });
execSync('git push origin main', { stdio: 'inherit' });
execSync(`git push origin v${version}`, { stdio: 'inherit' });

// Generate changelog and push
execSync('pnmp generate:changelog', { stdio: 'inherit' });
execSync('pnpm format', { stdio: 'inherit' });
execSync(`git commit -m "docs: generate CHANGELOG for version: ${version}"`, {
	stdio: 'inherit',
});
execSync('git push origin main', { stdio: 'inherit' });
