<?php
/**
 * Plugin Name: RedTree Maps Integration
 * Description: Custom Integration of Redtree Maps
 * Version: 1.0
 * Author: Redtee
 */

 if (!defined('WPINC')) {
    die;
}

// Define plugin constants
define('RTMAPS_INT_V', '1.0.0');
define('RTMAPS_INT_PATH', plugin_dir_path(__FILE__));
define('RTMAPS_INT_URL',plugin_dir_url(__FILE__));


class RedTree_Maps_Integration {
    public function __construct() {
        add_action('init', array($this, 'check_dependency'), 99);
    }

    public function check_dependency() {
        // Ensure the is_plugin_active function is available
        if (!function_exists('is_plugin_active')) {
            require_once(ABSPATH . 'wp-admin/includes/plugin.php');
        }

        // Check if the target plugin is active
        if (!is_plugin_active('redtree-maps/redtree-maps.php')) {
            // Display an admin notice
            add_action('admin_notices', array($this, 'dependency_notice'));

            // Deactivate the plugin to prevent further execution
            deactivate_plugins(plugin_basename(__FILE__));

            // Prevent further execution
            return;
        }

        // Safe to initialize the plugin
        $this->init();
    }

    public function dependency_notice() {
        ?>
        <div class="notice notice-error">
            <p><?php _e('My Plugin requires the Red Tree Maps to be installed and activated.
            RedTree Maps Integration has been deactivated.', 'redtree'); ?></p>
        </div>
        <?php
    }

    public function init() {
        // Your plugin initialization code here
        add_action('wp_enqueue_scripts', array($this, 'rt_map_integration_scripts_enqueue'), 99);
    }

    public function rt_map_integration_scripts_enqueue() {
        wp_dequeue_script('rt-maps-frontend');
        wp_enqueue_style('rt-maps-frontend-integration',  RTMAPS_INT_URL . 'build/style-index.css');
        wp_enqueue_script('rt-maps-frontend-integration', RTMAPS_INT_URL . 'build/index.js', array('wp-element', 'wp-components', 'wp-api-fetch', 'wp-data'), null, true );
    }
}

new RedTree_Maps_Integration();
