<!DOCTYPE html>
<html lang="en">

<head>
    <title>Show other sites</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>

<body>
    <h1>Show other sites</h1>
    
    <form method="post" action="index.php">
        <input name="url_enter" type="text" placeholder="url">
        <input type="submit" value="go">
        <a href="?back">BACK</a>
    </form>

    <?php
        if ($_POST) {
            $url_in = $_POST["url_enter"];
            if ($url_in) {
                echo "<hr>";
                echo "<label>url: ". $url_in."<label>";
                echo "<hr>";
                $content = file_get_contents($url_in);
                $content = substr($content, strpos($content, "<body"), strpos($content, "</body>") - strpos($content, "<body") + 7);
                $content = str_replace("<", "&lt;", $content);
                $content = str_replace(">", "&gt;", $content);
                $content = nl2br($content);
                echo($content);
            }
        } else {
            echo "<br><label>Type an URL...</label>";
        }
    ?>
</body>
</html>