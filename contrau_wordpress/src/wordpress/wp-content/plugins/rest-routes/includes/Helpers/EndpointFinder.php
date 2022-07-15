<?php

namespace RestRoutes\Helpers;

use RestRoutes\Models\Route;

class EndpointFinder
{

    public function getByMethod($route, $method)
    {
        $routeObject = (new RouteFactory())->create($route);

        if (!$routeObject) {
            return null;
        }

        foreach ($routeObject->getEndpoints() as $endpoint) {
            if (false !== strpos($endpoint->getMethod(), $method)) {
                return $endpoint;
            }
        }

        return null;
    }
}
