import { existsSync, readFileSync } from 'node:fs';

import { defineConfig, devices } from '@playwright/test';

/**
 * Load .env without overriding variables already set in the shell.
 */
function loadEnvFile() {
	if ( ! existsSync( '.env' ) ) {
		return;
	}

	for ( const line of readFileSync( '.env', 'utf8' ).split( '\n' ) ) {
		const trimmed = line.trim();

		if ( ! trimmed || trimmed.startsWith( '#' ) ) {
			continue;
		}

		const separator = trimmed.indexOf( '=' );

		if ( separator === -1 ) {
			continue;
		}

		const key = trimmed.slice( 0, separator ).trim();
		const value = trimmed.slice( separator + 1 ).trim().replace( /^['"]|['"]$/g, '' );

		if ( ! process.env[ key ] ) {
			process.env[ key ] = value;
		}
	}
}

loadEnvFile();

export default defineConfig( {
	testDir: 'e2e',
	use: {
		...devices[ 'Desktop Chrome' ],
	},
} );
