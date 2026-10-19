import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
	[ 'core/paragraph', { placeholder: __( 'Slide content…', 'slideforge' ) } ],
];

/**
 * Edit a single slide and its inner blocks.
 */
export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'slideforge-slider__slide keen-slider__slide',
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks template={ TEMPLATE } />
		</div>
	);
}
