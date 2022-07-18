<?php

namespace RestRoutes\Hooks\REST\Actions;

interface ICallbackParser
{

    /**
     * @param array            $args
     * @param \WP_REST_Request $request_data
     * @param array            $endpoint
     *
     * @return array
     */
    public function parse(array $args, \WP_REST_Request $request_data, array $endpoint);
}
