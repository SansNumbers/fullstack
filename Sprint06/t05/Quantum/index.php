<?php

namespace Space\Quantum;
use \DateTime;

function calculate_time() {
    $past = new DateTime("1939-01-01");
    $cur = new DateTime("now");

    $res = $past->diff($cur);
    $res->format('%Y years %M months %D days');

    $days = ($res->format("%Y") * 365 + $res->format("%M") * 30 + $res->format("%D")) / 7;
    $arr = [];

    array_push($arr, floor($days / 365));
    $days %= 365;

    array_push($arr, floor($days / 30));
    $days %= 30;

    array_push($arr,floor($days));
    return $arr;
}
?>