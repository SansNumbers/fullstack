<?php
  class DatabaseConnection {
    public $connection;
    function __construct($host, $port, $username, $password, $database) {
        try {
            $this->connection = new PDO("mysql:host=$host;dbname=$database", $username, $password);
        } catch (PDOException $error) {
            print "Error!: ".$error->getMessage();
            die();
        }
    }

    function __destruct() {
        $this->connection = NULL;
    }

    function getConnectionStatus() {
        if ($this->connection != NULL)
            return true;
        return false;
    }
  }

  $DB_connect = new DatabaseConnection('127.0.0.1', '3000', 'iantypin', 'securepass', 'ucode_web');
  if ($DB_connect->getConnectionStatus() == true) {
      echo 'Success!';
  }
  else {
      echo 'Connection problems!';
  }
?>