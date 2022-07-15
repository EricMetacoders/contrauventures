<?php

namespace RestRoutes\Helpers;


class OutputSorter
{

    public static function sort($arr) {
        usort($arr, static function ($a, $b) {
            if (!isset($a['fields'], $b['fields'])) {
                return 0;
            }

            $positionA = (int) (FieldValueParser::getFieldValue($a['fields'], 'position') ?: 999);
            $positionB = (int) (FieldValueParser::getFieldValue($b['fields'], 'position') ?: 999);

            if ($positionA === $positionB) {
                return 0;
            }

            return $positionA < $positionB ? -1 : 1;
        });

        return $arr;
    }
}
