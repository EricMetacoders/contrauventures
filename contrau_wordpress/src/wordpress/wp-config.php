<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'contrau_wordpress' );


/** Database username */

define( 'DB_USER', 'bn_contrau' );


/** Database password */

define( 'DB_PASSWORD', '' );


/** Database hostname */

define( 'DB_HOST', 'mariadb:3306' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'x}5qhAw:+,Z7?kiQ+Gd7)bpVH)iY5Cit@3a:EK6|:YSnT0jrCcDbM^(sn!O<%z-' );

define( 'SECURE_AUTH_KEY',  'ZM]Pi!K+]e%kER^(Jx2MCNrq<SX<7r8>[5U0fkRIJR54*bdv,$YNuB10y#!LB4Za' );

define( 'LOGGED_IN_KEY',    'S3!}C:pv)YFXaE!Wh=f$L^~gw*@dpd3l%O6k@)e;k^B7]{`iMOa7:yJf{kTO-kGt' );

define( 'NONCE_KEY',        '$sF~aHCk6?cO0h<jc`53NCoqUWs1._O@qd2kxFE<,EWym|#_VRzl(&W``~0VxPE6' );

define( 'AUTH_SALT',        '0{eQc>q4lMnCMqSpS=_Q6 rk}?sw)_-j!fln?1r0ZtWZ^|wDsKY1m0-mpdYzWCa>' );

define( 'SECURE_AUTH_SALT', 'ZCb5aQVWm~C*j6cw~5=O~-3PX;|xqfQlw-LT7O6Y/xIj[G6!DbF~iHp8ZGTs!Spa' );

define( 'LOGGED_IN_SALT',   '+sea93UMb2~FLsMv4nJK{OJ1zB}`00u}u|i4H^POW2h#SRNL}Nd{V+<@VTAo<6.]' );

define( 'NONCE_SALT',       '>Adfu7z0?:p,E8asD<+Q=pE/ubcY43)q{^@SONjw[ri~?a$NL2pW^t&#exD|%[eU' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/support/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */




define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', false );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}
