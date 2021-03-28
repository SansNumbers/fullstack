<?php

namespace Space\Normal;
use \DateTime;

function calculate_time() {
    $past = new DateTime("1939-01-01");
    $cur = new DateTime("now");
    $res = $past->diff($cur);
    return $res;
}

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf=8">
    <title>Quantum space</title>
</head>

<body>
    <p><?php $time=calculate_time();echo"In real life you were absent for ". $time->format("%Y") . " years, " . $time->format("%m") . " months, " . $time->format("%d") . " days";?></p></body>

</html>