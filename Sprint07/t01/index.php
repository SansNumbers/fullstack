<?php
if(!$_POST) {
    echo'<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Session for new</title>
    </head>
    <body>
        <h1>Session for new</h1>
        <fieldset>
        <form action="" method="post">
            <fieldset>
                <legend>About HERO</legend>
                <br>
                <label>Real Name <input type="text" name="Name" placeholder="Superhero real name" required></label>
                <label>Current Alias</label>
                <input type="text" name="Alias" placeholder="Superhero alias">
                <label>Age <input type="number" name="Age" min="1" max="999"></label>
                <br><br><label>About <textarea rows="5" name="About" cols="70" maxlength="500" placeholder="Information about the superhero, max 500 symbols"></textarea></label>
                <br><br><label>Photo: <input name="Photo" type="file"></label>
                <br><br>
            </fieldset>
            <fieldset>
                <legend>Powers</legend>
                <br>
                <input type="checkbox" name="STRENGTH">Strength
                <input type="checkbox" name="SPEED">Speed
                <input type="checkbox" name="INTELLIGENCE">Intelligence
                <input type="checkbox" name="TELEPORT">Teleportation
                <input type="checkbox" name="IMMORTAL">Immortal
                <input type="checkbox" name="ANOTHER">Another
                <br><br><label>Level of control:<input type="range" value="0" name="experience"></label>
                <br><br>
            </fieldset>
            <fieldset>
                <legend>Origin of Powers</legend>
                <input type="radio" name="Radio" value="0"> <label>UNKNOWN</label>
                <input type="radio" name="Radio" value="1"> <label>LIKE A CHOST</label>
                <input type="radio" name="Radio" value="2"> <label>I AM IN COMICS</label>
                <input type="radio" name="Radio" value="3"> <label>I HAVE FUN CLUB</label>
                <input type="radio" name="Radio" value="4"> <label>SUPERSTAR</label>
                <br>
            </fieldset>
            <br>
            <input type="reset" value="CLEAR"> <input type="submit" value="SEND">
            <br><br>
        </form>
        </fieldset>
    
    </body>
    </html>';
} else {
    $count = 0;
    $arr = Array('STRENGTH', 'SPEED', 'INTELLIGENCE', 'TELEPORT', 'IMMORTAL', 'ANOTHER');
            foreach ($arr as $checkbox) {
                if ($_POST[$checkbox] == 'on') 
                    $count++;             
            }
    $DataSuperhero = [
        'name' => $_POST['Name'],
        'age' => $_POST['Age'],
        'alias' => $_POST['Alias'],
        'desc' => $_POST['About'],
        'photo' => $_POST['Photo'],
        'expe' => $_POST['experience'],
        'Radios' => $_POST['Radio'],
    ];

    echo '<h1>Session for new</h1>';
    echo 'name: '.$DataSuperhero['name']. '<br>';
    echo 'alias: '.$DataSuperhero['alias']. '<br>';
    echo 'age: '.$DataSuperhero['age']. '<br>';
    echo 'description: '.$DataSuperhero['desc'].'<br>';
    echo 'photo: '.$DataSuperhero['photo'].'<br>';
    echo 'experience: '.$count.'<br>';
    echo 'level: '.$DataSuperhero['expe'].'<br>';
    echo 'purpose: '.$DataSuperhero['Radios'].'<br>';
    echo '
    <br><fieldset>
        <form>
            <input type="submit" value="FORGET">
        </form>
    </fieldset>';

}
?>