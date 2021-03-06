<?php
    session_start();
    include 'connection/DatabaseConnection.php';
    include 'models/SignUp.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Task00</title>
</head>
<body>
    <form action="index.php" method="POST" class="box_form">
        <div class="body_reg">
            <input placeholder="Login" name="login">
            <input type="password" placeholder="Password" name="password">
            <input type="password" placeholder="Confirm password" name="password2">
            <input placeholder="Full name" name="full_name">
            <input placeholder="Email" name="email">
            <input type="submit" value="Sign up" name="sign_up">
        </div>
    </from>

    <?php
        if(isset($_POST['sign_up'])) {
            $conn = new SignUp("users", $_POST['login'], $_POST['password'], $_POST['password2'], $_POST['full_name'], $_POST['email']);
            if($conn->save()) {
                echo '<span class="success">Sign up successful.</span>';
            }
            else {
                echo '<span class="fail">Sign up failed.</span>';
            }
        }
    ?>
</body>
</html>