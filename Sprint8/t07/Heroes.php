<?php

require_once(__DIR__ . "/Model.php");

class Heroes extends Model {
    public $id;
    public $name;
    public $description;
    public $race;
    public $class_role;

    public function __construct() {
        $this->setConnection();
        $this->setTable("heroes");
    }

    public function __destruct() {
        unset($this->connection);
    }

    public function find($id) {
        if ($this->connection->getConnectionStatus()) {
            $query = mysqli_query($this->connection->connection, "SELECT * FROM " . $this->table . " WHERE id = $id" . ";");

            if(!$query) {
                return;
            }

            $row = mysqli_fetch_assoc($query);
            $this->id = $row["id"];
            $this->name = $row["name"];
            $this->description = $row["description"];
            $this->race = $row["race"];
            $this->class_role = $row["class_role"]; 
            
        }
    }

    public function delete() {    
        if ($this->connection->getConnectionStatus()) {
            $query = mysqli_query($this->connection->connection, "SELECT id FROM " . $this->table . " WHERE id = " . $this->id . ";");
            $row = mysqli_fetch_assoc($query);

            if (!$row["name"]) {
                mysqli_query($this->connection->connection, "DELETE name FROM " . $this->table . " WHERE id = " . $this->id . ";");
                $this->id = null;
                $this->name = null;
                $this->description = null;
                $this->race = null;
                $this->class_role = null;
            }
        }
    }

    public function save() {
        if ($this->connection->getConnectionStatus()) {
            $query = mysqli_query($this->connection->connection, "SELECT id FROM " . $this->table . " WHERE id = " . $this->id . ";");
            $row = mysqli_fetch_assoc($query);

            if ($row["name"]) {
                mysqli_query($this->connection->connection, "UPDATE heroes SET id = " . $this->id . ", name = '" . $this->name . "', description = '" . $this->description . "', race = '" . $this->race . "', class_role = '" . $this->class_role . "'  WHERE id = " . $this->id . ";");
            } else {
                mysqli_query($this->connection->connection, 'INSERT INTO heroes (id, name, description, race, class_role) VALUES ("' . $this->id . '", "' . $this->name . '", "' . $this->description . '", "' . $this->race . '", "' . $this->class_role . '");');
            }
        }
    }
}
?>
