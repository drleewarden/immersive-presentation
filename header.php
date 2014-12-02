<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <main>
 * and the left sidebar conditional
 *
 * @since 1.0.0
 */
?><!DOCTYPE html>
    <!--[if lt IE 7]>      <html lang="en" ng-app="immersive" class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
    <!--[if IE 7]>         <html lang="en" ng-app="immersive" class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
    <!--[if IE 8]>         <html lang="en" ng-app="immersive" class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
    <!--[if gt IE 8]><!--> <html lang="en" ng-app="immersive" class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->

<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/app/bower_components/html5-boilerplate/css/normalize.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/app/bower_components/html5-boilerplate/css/main.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/app/css/app.css"/>
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/app/css/site.css"/>
<script src="<?php echo get_template_directory_uri(); ?>/app/bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js"></script>
    <!--<script src="<?php echo get_template_directory_uri(); ?>/app/js/vendor/jquery-2.1.0.min.js"></script>-->
<!--[if IE]><script src="<?php echo BAVOTASAN_THEME_URL; ?>/library/js/html5.js"></script><![endif]-->


    <!--<script src="<?php echo get_template_directory_uri(); ?>/app/bower_components/jquery/dist/jquery.js"></script>-->
    <!--<script src="<?php echo get_template_directory_uri(); ?>/app/js/vendor/isotope.pkgd.min.js"></script>-->
    <script data-main="<?php echo get_template_directory_uri(); ?>/app/js/main" src="<?php echo get_template_directory_uri(); ?>/app/bower_components/requirejs/require.js"></script>
    <!--<script src="<?php echo get_template_directory_uri(); ?>/library/js/theme.js"></script>-->
    <?php wp_head(); ?>



</head>
<?php
$bavotasan_theme_options = bavotasan_theme_options();
$space_class = '';
?>
<body <?php body_class(); ?>>

	<div id="page">

		<header id="header">
			<nav id="site-navigation" class="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<h3 class="sr-only"><?php _e( 'Main menu', 'arcade' ); ?></h3>
				<a class="sr-only" href="#primary" title="<?php esc_attr_e( 'Skip to content', 'arcade' ); ?>"><?php _e( 'Skip to content', 'arcade' ); ?></a>

				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				    </button>
				</div>

				<div class="collapse navbar-collapse">
					<?php
					$menu_class = ( is_rtl() ) ? ' navbar-right' : '';
					wp_nav_menu( array( 'theme_location' => 'primary', 'container' => '', 'menu_class' => 'nav navbar-nav' . $menu_class, 'fallback_cb' => 'bavotasan_default_menu', 'depth' => 2 ) );
					?>
				</div>
			</nav><!-- #site-navigation -->

			 <div class="title-card-wrapper">
                <div class="title-card">
    				<div id="site-meta">
    					<h1 id="site-title">
    						<a href="<?php echo esc_url( home_url() ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
    					</h1>

    					<?php if ( $bavotasan_theme_options['header_icon'] ) { ?>
    					<i class="fa <?php echo $bavotasan_theme_options['header_icon']; ?>"></i>
    					<?php } else {
    						$space_class = ' class="margin-top"';
    					} ?>

    					<h2 id="site-description"<?php echo $space_class; ?>>
    						<?php bloginfo( 'description' ); ?>
    					</h2>

    					<a href="#" id="more-site" class="btn btn-default btn-lg"><?php _e( 'See More', 'arcade' ); ?></a>
    				</div>

    				<?php
    				// Header image section
    				bavotasan_header_images();
    				?>
				</div>
			</div>

		</header>

		<main>