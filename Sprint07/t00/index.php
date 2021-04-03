<?php
    session_start();
    if (empty($_SESSION['count']) || !$_COOKIE['count']) {
        $_SESSION['count'] = 1;
        setcookie("count", $_SESSION['count'], time() + 60);
    }
    else {
        $_SESSION['count']++;
        setcookie("count", $_SESSION['count'], time() + 60);
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Cookie counter</title>
    </head>
    <body>
        <h1>Cookie counter</h1>
        <p>This page was loaded <b>
        <?php 
            if(!$_COOKIE['count']) {
                echo 1;
            } 
            else { 
                echo $_COOKIE['count']; 
            } 
        ?>
        </b>time(s) in last minute.
        </p>
    </body>
</html>
