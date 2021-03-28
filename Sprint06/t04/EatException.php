<?php
class EatException extends Exception {
    public function __construct() {
        $this->name = 'EatException';
        $this->message = 'No more junk food, dumpling';
    }
}
?>