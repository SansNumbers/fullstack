<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Task 07</title>
    </head>
<body>
<h1>Task 07</h1>
    <div>A name of file of the executed script:</div><div><?php echo $_SERVER ["PHP_SELF"];?></div><br>
    <div>Arguments passed to the script:</div> <div><?php echo $_SERVER ["argv"]?></div><br>
    <div>IP address of the server:</div> <div><?php echo $_SERVER ["SERVER_ADDR"]?></div><br>
    <div>A name of host that invoke script:</div> <div><?php echo $_SERVER ["SERVER_NAME"]?></div><br>
    <div>A name and a version of the protocol:</div> <div><?php echo $_SERVER ["SERVER_PROTOCOL"]?></div><br>
    <div>A query method:</div> <div><?php echo $_SERVER ["QUERY_STRING"]?></div><br>
    <div>User-Agent info:</div> <div><?php echo $_SERVER ["HTTP_USER_AGENT"]?></div><br>
    <div>IP address of the client:</div> <div><?php echo $_SERVER ["REMOTE_ADDR"]?></div><br>
    <div>A list of parameters passed by URL:</div> <div><?php echo $_SERVER ["PATH_INFO"]?></div>
</body>

</html>