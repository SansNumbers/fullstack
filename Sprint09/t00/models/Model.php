<?php
    abstract class Model {
        public function __construct($table) {
            $this->setTable($table);
            $this->setConnection();
        }
        function setTable($table) {
            $this->table = $table;
        }
        function setConnection() {
            $this->dbNewC = new DatabaseConnection('127.0.0.1', null, "iantypin", "securepass", "sword");
        }
    }
?>