<?php

namespace RestRoutes\Bootstrap;

use  RestRoutes\Capabilities\CapList ;
use  RestRoutes\Compatibility\ACF ;
use  RestRoutes\Compatibility\ToolsetTypes ;
use  RestRoutes\Helpers\RouteFactory ;
use  RestRoutes\Helpers\RoutesCollection ;
use  RestRoutes\Hooks\Menu\Admin ;
use  RestRoutes\Hooks\PostType\PostLinks ;
use  RestRoutes\Hooks\PostType\Registration ;
use  RestRoutes\Hooks\PostType\RouteDuplication ;
use  RestRoutes\Hooks\REST\CustomRoutes ;
use  RestRoutes\Hooks\REST\CustomTables ;
use  RestRoutes\Hooks\REST\NewRoute ;
use  RestRoutes\Hooks\Scripts\Scripts ;
use  RestRoutes\Repository\CustomTable ;
class App
{
    public function init()
    {
        global  $wpdb ;
        $hooks = [
            new Admin(),
            new Scripts( new CapList() ),
            new NewRoute(),
            new CustomRoutes( new RoutesCollection( new RouteFactory() ) ),
            new Registration(),
            new PostLinks(),
            new RouteDuplication(),
            new CustomTables( new CustomTable( $wpdb ) )
        ];
        foreach ( $hooks as $hook ) {
            $hook->registerHooks();
        }
    }

}