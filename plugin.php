<?php
/**
 * Plugin Name:       SlideForge – Slider & Carousel
 * Plugin URI:        https://github.com/mariuszmatlosz/keen-slider-wpblock
 * Description:       Gutenberg slider and carousel block.
 * Version:           1.0.0
 * Requires at least: 6.3
 * Requires PHP:      8.0
 * Author:            Mariusz Matlosz
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       slideforge
 *
 * @package SlideForge
 */

namespace SlideForge;

defined( 'ABSPATH' ) || exit;

require_once __DIR__ . '/inc/namespace.php';

bootstrap();
