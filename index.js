#!/usr/bin/env node

import init from './utils/init.js';
import cli from './utils/cli.js';
import encrypt from './utils/encrypt.js';
import decrypt from './utils/decrypt.js';
import chalk from 'chalk';

const input = cli.input;
const flags = cli.flags;
const { clear } = flags;

(async () => {
	init({ clear });

	input.includes('help') && cli.showHelp(0);

	if (flags.encrypt) {
		await encrypt(flags);
	} else if (flags.decrypt) {
		await decrypt(flags);
	}

	console.log(
		chalk.bgMagenta(' Give it a star on github: ') +
		chalk.bold(' https://github.com/theninza/imcrypt ')
	);
})();
