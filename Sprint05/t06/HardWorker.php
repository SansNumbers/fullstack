<?php
    class HardWorker {
        private $name, $age, $salary;
        

        function setName($name) {
            $this->name = $name;
        }

        function getName() {
            return $this->name;
        }


        function setAge($age) { 
            if ($age >= 1 && $age <= 100) {
                $this->age = $age;
                return true;
            } else
                return false;
        }
        
        function getAge() {
            return $this->age;
        }


        function setSalary($salary) {
            if ($salary >= 100 && $salary <= 10000) {
                $this->salary = $salary;
                return true;
            } else
                return false;
        }

        function getSalary() {
            return $this->salary;
        }

        
        function toArray() {
            $res['name'] = $this->name;
            $res['age'] = $this->age;
            $res['salary'] = $this->salary;
            return $res;
        }
    }

    // $Bruce= new HardWorker();

    // $Bruce->setName("Bruce");

    // echo $Bruce->getName() . "\n";

    // $Bruce->setAge(50);
    // $Bruce->setSalary(1500);

    // print_r ($Bruce->toArray());

    // $Bruce->setName("Linda");
    // $Bruce->setAge(140);

    // print_r ($Bruce->toArray());

?>