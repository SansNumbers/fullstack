<?php
    include '../view/View.php';

    interface ControllerInterface {
        function __construct();
        function execute();
    }

    class Main implements ControllerInterface {
        public $view;
        public function __construct() {
            $this->view = New View('../view/templates/main.html');
        }
        public function execute() {
            $this->view->render();
        }
    }
    $main = New Main();
    $main->execute();
?>