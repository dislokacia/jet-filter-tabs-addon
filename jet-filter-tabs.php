<?php
/**
 * Plugin Name: JetFilterTabs
 * Description: With this plugin you can filter the listing grid looks like tabs
 * Plugin URI:  https://github.com/dislokacia/jet-filter-tabs
 * Version:     1.0.0
 * Author:      Andrew Rook
 * Author URI:  https://github.com/dislokacia
 * Text Domain: jet-filter-tabs
 *
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}


function jet_filter_tabs_scripts(){
	wp_register_script( 'jet_filter_tabs', plugins_url( '/assets/js/script.js', __FILE__ ), array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'jet_filter_tabs' );
 
	wp_enqueue_style( 'jet_filter_tabs_styles', plugins_url( '/assets/css/style.css', __FILE__ ), '', '1.0' );
}
add_action( 'jet-engine/listings/frontend-scripts', 'jet_filter_tabs_scripts' );