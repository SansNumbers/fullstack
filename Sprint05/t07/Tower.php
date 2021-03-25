<?php
    class Tower extends Building {
        private $elevator;
        private $arc_capacity;
        private $height;

        function hasElevator() : bool {
            return $this->elevator;
        }

        function setElevator($elevator) {
            $this->elevator = $elevator;
        }


        function getArcCapacity() : int {
            return $this->arc_capacity;
        }

        function setArcCapacity($arc_capacity) {
            $this->arc_capacity = $arc_capacity;
        }


        function getHeight() : float {
            return $this->height;
        }

        function setHeight($height) {
            $this->height = $height;
        }


        public function getFloorHeight() : float {
            return $this->getHeight() / $this->getFloors();
        }


        public function toString() : string {
            $properties = ["Floors : " . $this->floors,
                "Material : " . $this->material,
                "Address : " . $this->address,
                "Elevator : ". (($this->elevator) ? "+" : "-"),
                "Arc reactor capacity : ". $this->arc_capacity,
                "Height : ". $this->height,
                "Floor height : ". $this->getFloorHeight()
            ];

            $str = "";

            foreach ($properties as $p)
                $str = $str . $p . "\n";
            return $str;
        }
    }
?>