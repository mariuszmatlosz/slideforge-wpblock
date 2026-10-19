import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Save the slider markup that Keen Slider enhances on the frontend.
 *
 * @param {Object} props            Block props.
 * @param {Object} props.attributes Saved block attributes.
 */
export default function Save( { attributes } ) {
	const {
		loop = true,
		center = false,
		padding = 16,
		arrows = false,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: arrows
			? 'slideforge-slider slideforge-slider--has-arrows'
			: 'slideforge-slider',
		'data-loop': loop ? 'true' : 'false',
		'data-center': center ? 'true' : 'false',
		'data-padding': String( padding ),
		'data-arrows': arrows ? 'true' : 'false',
	} );

	return (
		<div { ...blockProps }>
			<div className="slideforge-slider__container keen-slider">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
