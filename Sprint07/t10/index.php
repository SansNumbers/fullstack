<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Make square image</title>
</head>
<body>

<div class="center">
    <h1>Make square image</h1>
    <form action="index.php" method="post">
        <input name="image_url" placeholder="Image url..." size="40"><br><br>
        <input type="submit" value="GO">
    </form>
</div>
<style>
.center {
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: center;
}

img {
    width: 100%;
}

.row {
    display: flex;
}

.column {
    flex: 50%;
}
</style>

<?php
define("FILENAME", "image");

function getextension($url) {
    return(array_pop(explode(".", $url)));
}

function createImage($url) {
    $extension = getextension($url);
    $imageOriginal = null;
    if ($extension == "png") {
        $imageOriginal = imagecreatefrompng($url);
    }
    else if ($extension == "jpg") {
        $imageOriginal = imagecreatefromjpeg($url);
    }


    if (imagesx($imageOriginal) < imagesy($imageOriginal)) {

        $imageOriginal = imagecrop(
            $imageOriginal,
            array(
                "x" => 0,
                "y" => (imagesy($imageOriginal) - imagesx($imageOriginal)) / 2,
                "width" => imagesx($imageOriginal),
                "height" => imagesx($imageOriginal)
            )
        );
    }
    else {
        $imageOriginal = imagecrop(
            $imageOriginal,
            array(
                "x" => (imagesx($imageOriginal) - imagesy($imageOriginal)) / 2,
                "y" => 0,
                "width" => imagesy($imageOriginal),
                "height" => imagesy($imageOriginal)
            )
        );
    }
    return $imageOriginal;
}

function saveImage($url, $resource, $color = "-original") {
    $extension = getextension($url);
    $descriptor = 0;

    if ($extension == "png") {
        $descriptor = fopen(FILENAME . $color . ".png", "w");
        imagepng($resource, FILENAME . $color . ".png");
    }
    else if ($extension == "jpg") {
        $descriptor = fopen(FILENAME . $color . ".jpg", "w");
        imagejpeg($resource, FILENAME . $color . ".jpg");
    }
    fclose($descriptor);
}
?>


<?php
    if ($_POST) {
        $imageOriginal = createImage($_POST["image_url"]);

        saveImage($_POST["image_url"], $imageOriginal);
        
        $imageRed = createImage($_POST["image_url"]);
        imagefilter($imageRed, IMG_FILTER_COLORIZE, 256, 0, 0);
        saveImage($_POST["image_url"], $imageRed, "-red");

        $imageGreen = createImage($_POST["image_url"]);
        imagefilter($imageGreen, IMG_FILTER_COLORIZE, 0, 256, 0);
        saveImage($_POST["image_url"], $imageGreen, "-green");

        $imageBlue = createImage($_POST["image_url"]);
        imagefilter($imageBlue, IMG_FILTER_COLORIZE, 0, 0, 256);
        saveImage($_POST["image_url"], $imageBlue, "-blue");

        imagedestroy($imageOriginal);
        imagedestroy($imageRed);
        imagedestroy($imageGreen);
        imagedestroy($imageBlue);
    }
?>

<?php
if ($_POST) {
    $extension = getextension($_POST["image_url"]);
    echo '<div class="row">';
        echo '<div class="column">';
            echo '<img src="image-original.' . $extension . '" alt="No photo! Incorrect URL!">';
        echo '</div>';
        echo '<div class="column">';
            echo '<img src="image-red.' . $extension . '" alt="No photo! Incorrect URL!">';
        echo '</div>';
    echo '</div>';
    echo '<div class="row">';
        echo '<div class="column">';
            echo '<img src="image-green.' . $extension . '" alt="No photo! Incorrect URL!">';
        echo '</div>';
        echo '<div class="column">';    
            echo '<img src="image-blue.' . $extension . '" alt="No photo! Incorrect URL!">';
        echo '</div>';
    echo '</div>';
}
?>
    
</body>
</html>