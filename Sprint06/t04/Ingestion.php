<?php
class Ingestion {
        public $id;
        public $meal_type = array("breakfast", "lunch", "dinner");
        public $day_of_diet;
        public $products = array();

        public function __construct($meal_type, $day_of_diet) {
            $this->meal_type = $meal_type;
            $this->day_of_diet = $day_of_diet;
        }
        
        public function setProduct($product) {
            $this->products[$product->name] = $product;
        }

        public function getProducts() {
            return $this->products;
        }
        
        public function get_from_fridge($product) : void {
            if($this->products[$product]->getKcal() > 200) {
                throw new EatException();
            }
        }
}
?>