<?php

function twoSum(array $nums, int $target): array
{
    $map = [];

    for ($i = 0; $i < count($nums); $i++) {
        $complement = $target - $nums[$i];

        if (isset($map[$complement])) {
            return [$map[$complement], $i];
        }

        $map[$nums[$i]] = $i;
    }

    return [];
}

print_r(twoSum([11, 5, 7, 4, 78, 2], 9));