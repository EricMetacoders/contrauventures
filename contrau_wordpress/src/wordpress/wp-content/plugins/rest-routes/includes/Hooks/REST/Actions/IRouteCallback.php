<?php

namespace RestRoutes\Hooks\REST\Actions;

use RestRoutes\Helpers\EndpointFinder;

interface IRouteCallback
{

    const SOURCE_TYPE                = 0;
    const PARAMETER_VALUE            = 2;
    const FIXED_VALUE                = 1;
    const CUSTOM_FIELD_KEY           = 2;
    const CUSTOM_FIELD_PARAMETER_KEY = 3;
    const CUSTOM_FIELD_COMPARE_KEY   = 4;
    const CUSTOM_FIELD_GROUP_KEY     = 6;
    const TAX_GROUP_KEY              = 4;
    const TAX_FIELD_KEY              = 3;
    const TAX_TAXONOMY_KEY           = 2;
    const TAX_VALUE                  = 5;

    public function __construct(
        IQueryBuilder $queryBuilder,
        EndpointFinder $endpointFinder
    );

    public function getCallback(\WP_REST_Request $data);
}
