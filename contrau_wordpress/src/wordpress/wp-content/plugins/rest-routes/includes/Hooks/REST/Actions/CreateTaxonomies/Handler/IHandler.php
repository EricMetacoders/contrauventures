<?php

namespace RestRoutes\Hooks\REST\Actions\CreateTaxonomies\Handler;

interface IHandler
{

    public function run(array $data, \WP_REST_Request $request_data, $term_id);
}
