import { expect, test } from '@playwright/test';

const pageUrl = process.env.PLAYWRIGHT_BASE_URL;

test.beforeAll( () => {
	if ( ! pageUrl ) {
		throw new Error( 'Set PLAYWRIGHT_BASE_URL in .env to the local page that renders the slider.' );
	}
} );

test( 'initializes every slider on the local page', async ( { page } ) => {
	await page.goto( pageUrl );

	const containers = page.locator( '.wp-block-slideforge-slider .slideforge-slider__container' );

	await expect( containers.first() ).toBeVisible();

	const count = await containers.count();

	for ( let index = 0; index < count; index++ ) {
		const container = containers.nth( index );

		await expect.poll( () => container.evaluate( node => Boolean( node.keenSlider ) ) ).toBe( true );
	}
} );
