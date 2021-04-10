<?php
    include 'connection/DatabaseConnection.php';
    include 'models/PasswordReminder.php';
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Task02</title>
</head>
<body>
    <div>
        <form action="" method="POST" class="box_form">
            <div class="body_div">
                <input placeholder="Login" name="login">
                <input type="submit" value="Remind me password" name="Send_password">
            </div>
        </form>
    </div>

    <?php
        if(isset($_POST['Send_password'])) {
            $conn = new PasswordReminder("users", $_POST['login']);
            if($conn->getPassword()) {
                echo '<span class="success">Password successfully sent.</span>';
            }
            else {
                echo '<span class="fail">User doesn`t exists.</span>';
            }
        }
    ?>
</body>
</html>