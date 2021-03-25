<?php
    class Overload {
        private $data_array = array();
        
        function __set ($name , $value) {
            $this->data_array[$name] = $value;
        }

        function __get ($name) {
            if (array_key_exists($name, $this->data_array)) 
                return $this->data_array[$name];
            else 
                return "NO DATA";
        }

        function __isset ($name) : bool {
            $this->data_array[$name] = "NO SET";
            return true;
        }

        function __unset($name) {
            $this->data_array[$name] = NULL;
        }
    }

    // $overload = new Overload();

    // $overload->mark_LXXXV = "INACTIVE";
    // echo $overload->mark_LXXXV;

    // echo "\n" . $overload->mark_LXXXVI;

    // if (isset($overload->mark_LXXXVI))
    //     echo"\n" . $overload->mark_LXXXVI;

    // unset($overload->mark_IV);
    // if ($overload->mark_IV== NULL)
    //     echo "\nNULL\n";
?>