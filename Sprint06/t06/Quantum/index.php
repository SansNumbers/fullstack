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
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf=8">
    <title>Quantum space</title>
</head>

<body>
    <p><?php  $time=calculate_time();echo"In quantum space you were absent for ". $time[0] . " years, ".$time[1] . " months, ". $time[2] . " days";?></p></body>

</html>