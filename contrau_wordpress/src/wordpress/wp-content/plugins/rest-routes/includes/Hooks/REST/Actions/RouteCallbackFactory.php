<?php

namespace RestRoutes\Hooks\REST\Actions;

use RestRoutes\CustomTable\DbConnection;
use RestRoutes\Helpers\EndpointFinder;
use RestRoutes\Hooks\REST\Actions\CreateCustomTable\QueryBuilder as CreateTableQueryBuilder;
use RestRoutes\Hooks\REST\Actions\EditCustomTable\QueryBuilder as EditTableQueryBuilder;
use RestRoutes\Hooks\REST\Actions\DeleteCustomTable\QueryBuilder as DeleteTableQueryBuilder;
use RestRoutes\Hooks\REST\Actions\DisplayCustomTable\QueryBuilder;
use RestRoutes\Hooks\REST\Actions\DisplayData\Callback as DisplayDataCallback;
use RestRoutes\Hooks\REST\Actions\CreatePosts\Callback as CreatePostsCallback;
use RestRoutes\Hooks\REST\Actions\CreateUsers\Callback as CreateUsersCallback;
use RestRoutes\Hooks\REST\Actions\DisplayCustomTable\Callback as DisplayCustomTableCallback;
use RestRoutes\Hooks\REST\Actions\CreateCustomTable\Callback as CreateCustomTableCallback;
use RestRoutes\Hooks\REST\Actions\EditCustomTable\Callback as EditCustomTableCallback;
use RestRoutes\Hooks\REST\Actions\DeleteCustomTable\Callback as DeleteCustomTableCallback;
use RestRoutes\Hooks\REST\Actions\EditPost\Callback as EditPostCallback;
use RestRoutes\Hooks\REST\Actions\EditUser\Callback as EditUserCallback;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\CustomFields;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\DefaultFields;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\OffsetLimit;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\Ordering;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\Taxonomies;
use RestRoutes\Hooks\REST\Actions\DisplayData\QueryBuilder as PostsQueryBuilder;
use RestRoutes\Hooks\REST\Actions\DisplayTaxonomies\QueryBuilder as TaxonomiesQueryBuilder;
use RestRoutes\Hooks\REST\Actions\DisplayUsers\QueryBuilder as UsersQueryBuilder;

class RouteCallbackFactory
{

    const CREATION              = 'create_post';
    const POSTS_DISPLAY         = 'display_data';
    const TAXONOMIES_DISPLAY    = 'display_taxonomies';
    const CUSTOM_TABLES_DISPLAY = 'display_custom_table';
    const EDIT_POST             = 'edit_post';
    const CUSTOM_TABLES_CREATE  = 'create_custom_table';
    const CUSTOM_TABLES_EDIT    = 'edit_custom_table';
    const CUSTOM_TABLES_DELETE  = 'delete_custom_table';
    const DISPLAY_USERS         = 'display_users';
    const EDIT_USERS            = 'edit_users';
    const CREATE_USERS          = 'create_users';

    public function create($action)
    {
        global $wpdb;

        switch ($action) {
            case self::EDIT_POST:
                return new EditPostCallback(new EndpointFinder());
                break;
            case self::EDIT_USERS:
                return new EditUserCallback(new EndpointFinder());
                break;
            case self::CREATE_USERS:
                return new CreateUsersCallback(new EndpointFinder());
                break;
            case self::CREATION:
                return new CreatePostsCallback(new EndpointFinder());
                break;
            case self::POSTS_DISPLAY:
                return new DisplayDataCallback(
                    new PostsQueryBuilder(
                        [
                            new DefaultFields(),
                            new OffsetLimit(),
                            new Taxonomies(),
                            new CustomFields(),
                            new Ordering()
                        ]
                    ),
                    new EndpointFinder()
                );
                break;
            case self::TAXONOMIES_DISPLAY:
                return new DisplayDataCallback(
                    new TaxonomiesQueryBuilder(
                        [
                            new DefaultFields(),
                            new OffsetLimit(),
                            new CustomFields(),
                            new Ordering()
                        ]
                    ),
                    new EndpointFinder()
                );
            case self::DISPLAY_USERS:
                return new DisplayDataCallback(
                    new UsersQueryBuilder(
                        [
                            new DefaultFields(),
                            new OffsetLimit(),
                            new CustomFields(),
                            new Ordering()
                        ]
                    ),
                    new EndpointFinder()
                );
            case self::CUSTOM_TABLES_DISPLAY:
                return new DisplayCustomTableCallback(new EndpointFinder(), new QueryBuilder((new DbConnection($wpdb))->create()));
            case self::CUSTOM_TABLES_CREATE:
                return new CreateCustomTableCallback(new EndpointFinder(), new CreateTableQueryBuilder((new DbConnection($wpdb))->create()));
            case self::CUSTOM_TABLES_EDIT:
                return new EditCustomTableCallback(new EndpointFinder(), new EditTableQueryBuilder((new DbConnection($wpdb))->create()));
            case self::CUSTOM_TABLES_DELETE:
                return new DeleteCustomTableCallback(new EndpointFinder(), new DeleteTableQueryBuilder((new DbConnection($wpdb))->create()));
            default:
                return null;
        }
    }
}
