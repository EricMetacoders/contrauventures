<?php

namespace RestRoutes\Helpers;

class FieldValueParser
{

    public static function getFieldValue(array $fields, string $id) {
        $field = current(array_filter($fields, static function($f) use ($id) {
            return $f['id'] === $id;
        }));

        return $field['value'] ?? '';
    }

    public static function getValue(\WP_REST_Request $request, $field)
    {
        $value = self::getValueFromParameter($request, $field['fields']);

        if (self::isFixedValue($field['fields'])) {
            $fixed = current(array_filter($field['fields'], static function($f) {
                return $f['id'] === 'value';
            }));

            $value = $fixed['value'];
        }

        if (self::isDynamicValue($field['fields'])) {
            $type = FieldValueParser::getFieldValue($field['fields'], 'dynamicValues');

            if (!$type) {
                $type = $field['fields'][3]['value'] ?? '';
            }

            self::processCurrentUser($type, $value);
            self::processCurrentDate($type, $value);
        }

        if (!is_array($value)) {
            $value = esc_sql(sanitize_text_field($value));
        }

        if (!$value && $field['fields'][0]['value'] === 'body') {
            $value = $request->get_body();
        }

        return $value;
    }

    private static function processCurrentDate($type, &$value)
    {
        if (false === strpos($type, 'current_date_')) {
            return;
        }

        $dateField = str_replace('current_date_', '', $type);

        if ('date' === $dateField) {
            $value = date('Y-m-d');
            return;
        }

        if ('date_time' === $dateField) {
            $value = date('Y-m-d h:i:s');
            return;
        }

        if ('timestamp' === $dateField) {
            $value = strtotime(date('Y-m-d h:i:s'));
            return;
        }

        $value = date(substr($type, -1));
    }

    private static function processCurrentUser($type, &$value)
    {
        if (false === strpos($type, 'current_user_')) {
            return;
        }

        $currentUser = get_current_user_id();

        if (! $currentUser) {
            return;
        }

        $currentUser = get_userdata( $currentUser );

        if (! $currentUser) {
            return;
        }

        $userField = str_replace('current_user_', '', $type);
        $userField = 'id' === $userField ? strtoupper( $userField ) : $userField;

        $value = $currentUser->$userField;
    }

    private static function isFixedValue($fields)
    {
        $fixed = current(array_filter($fields, static function($f) {
           return $f['id'] === 'source';
        }));

        return 'fixedValue' === $fixed['value'];
    }

    private static function isDynamicValue($fields)
    {
        $dynamic = current(array_filter($fields, static function($f) {
            return $f['id'] === 'source';
        }));

        return 'dynamic' === $dynamic['value'];
    }

    private static function getValueFromParameter(\WP_REST_Request $request, $fields)
    {
        $parameter = current(array_filter($fields, static function($f) {
            return $f['id'] === 'parameters';
        }));

        return $request->get_param($parameter['value']);
    }
}
