<?php
    $pub_key = '2953e2c46d20e6a4e0e16a4fce77b22a';
    $private_key = '6fb236a0c618f2a298b68eeda5640f356ecbc8e5';

    $local_time = time();
    $hash_it = md5($local_time.$private_key.$pub_key);

    $our_url='http://gateway.marvel.com/v1/public/comics?ts='.$local_time.'&apikey='.$pub_key.'&hash='.$hash_it;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $our_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $result =curl_exec($ch);
    curl_close($ch);
    $the_data = json_decode($result, true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Marvel Api</title>
    <meta charset="UTF-8">
</head>

<style>
        #container {
            background-color:#2c2e31;
            border: 2px solid red;
            padding: 10px;
            margin: 5px;
        }
        .val {
            color: #5eb2c4;
            border: 2px solid red;
            background-color:#191924;
            padding: 10px;
            margin: 5px;
            
        }
        .color_val {
            color: #636e25;
        }
        label {
            color: white;
            margin: 5px;
        }
</style>

<body>
    <h1>Comics from Marvel Api</h1>
    <?php
        function parse_json($the_data) {
            
            foreach ($the_data as $key => $val) {
                
                if(is_array($val)) {
                    echo '<div id="container">';
                    echo "<div class='title_data'><label>".$key.": "."</label></div>";
                    parse_json($the_data[$key]);
                    echo '</div>';
                } else {
                    echo '<div class="val">'.$key.': '.'<span class="color_val">' .$val.'</span></div>';
                }
            }
        }
        parse_json($the_data);
    ?>
</body>
</html>