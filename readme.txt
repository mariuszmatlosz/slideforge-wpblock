=== SlideForge – Slider & Carousel ===
Contributors: mariuszmatlosz
Tags: slider, carousel, gutenberg, slides
Requires at least: 6.3
Tested up to: 7.1
Stable tag: 1.0.0
Requires PHP: 8.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Gutenberg slider and carousel. Add slides, then set loop, center, spacing, and arrows.

== Description ==

SlideForge adds a slider to the block editor. Each slider contains slide blocks, and each slide can hold any core blocks, such as paragraphs and images.

The front end is powered by [Keen Slider](https://keen-slider.io) by Eric Beyer. That library is bundled with the plugin and stays under its own MIT license. The site does not load it from a third party.

Since 2007 I have been looking for the best gallery script I could find. I have installed dozens of them, on a great many sites. Since I found Keen Slider, it has been the gallery script I reach for. I have not had trouble with it. It works the way I expect, and its configuration covers every feature I have ever needed.

This block does not expose every Keen Slider option. A few of them are difficult to bring into the editor. Over time I intend to add most of them, until the block covers about 99% of what the library can do.

Slider settings in the editor sidebar:

* **Loop** turns infinite scrolling on or off. It is on by default.
* **Center position** centers the active slide and shows a peek of the neighbors.
* **Padding** sets the space between slides.
* **Arrows** adds previous and next buttons. They are off by default.

The slider block supports wide and full alignment.

Readable source and the Vite build are maintained at [https://github.com/mariuszmatlosz/keen-slider-wpblock](https://github.com/mariuszmatlosz/keen-slider-wpblock). The copy installed from WordPress.org contains the compiled files in `build/`.

== Installation ==

1. Install the plugin from the WordPress plugin screen, or upload the zip.
2. Activate SlideForge.
3. In the editor, add the SlideForge block.
4. Add Slide blocks inside it and place content in each slide.
5. Adjust loop, center, padding, and arrows in the block sidebar.

== Frequently Asked Questions ==

= Does the site need Keen Slider installed separately? =

No. The library is included in this plugin.

= What can I put inside a slide? =

Any blocks the editor allows inside a slide, including paragraphs, images, and other core blocks.

== Changelog ==

= 1.0.0 =
* First release, with a slider block, nested slides, and front-end initialization.

== Upgrade Notice ==

= 1.0.0 =
First release.
