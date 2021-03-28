<!DOCTYPE html>
<html>
<head>
    <title>Task 08</title>
    <meta charset="utf-8"/>
</head>

<body>

    <h1>What Thanos did for the Soul Stone?</h1>
    <form method="post">
    <p><input type="radio" name="option" id="1" value="correct">Jumped from the mountain </p>
    <p><input type="radio" name="option" id="2" value="wrong">Made stone keeper to jump from the mountain</p>
    <p><input type="radio" name="option" id="3" value="wrong">Pushed Gamora off the mountain</p>
    <button type="submit">I made a choice!</button>
    <p id='answer'></p>
    </form>

    <?php
    if(isset($_POST["option"])) 
    { 
        if($_POST["option"] == "correct") {
            echo "Correct!";
        }
        else {
            echo "Shame on you! Go and watch Avengers!";
        }
    }
    ?>
</body>
</html>

