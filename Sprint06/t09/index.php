<!DOCTYPE html>
<html>
    
<head>
    <meta charset="utf-8">
    <title>Task 09</title>
</head>

<body>
    <h1>New Avenger application</h1>

    <?php
    $arr = ["name" => $_POST["name"],
        "email" => $_POST["email"],
        "age" => $_POST["age"],
        "description" => $_POST["descr"],
        "photo" => $_POST["photo"]];
        
        echo "<fieldset style=\"margin-bottom:12px; padding-top: 20px;background: rgb(192, 192, 192);\">";
        echo "POST";
        echo "<pre>";
        print_r($arr);
        echo "</fieldset>";
    ?>

    <form action="" method="post">
    <fieldset>
    <fieldset>
    <legend>About candidate</legend>
    <label>Name: </label><input style="margin-top: 10px;" type ="text" name="name" placeholder="Tell your name" required>
    <label>E-mail: </label><input style="margin-top: 10px;" type ="text" name="email" placeholder="Tell your e-mail" required>
    <label>Age: </label><input style="margin-top: 10px;" type ="text" name="age"required><br>
    <label>About: </label><textarea type="text" style="margin-top: 10px;" name="descr" maxlength="500" cols="50" rows="5" 
                                placeholder="Tell about yourself, max 500 symbols" required></textarea><br>
    <label>Your photo: </label><input style="margin-top: 10px;" type="file" name="photo" id="choose"><br><br>
    </fieldset><br>
        <input style="margin-top: 10px;" type="reset" value ="CLEAR">
        <input style="margin-top: 10px;" type="submit" value="SEND">
        <br><br>
    </fieldset>
    </form>
</body>
</html>