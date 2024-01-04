<?php
class Pet
{
  public $first, $last, $deserves_love;
  function __construct($first, $last)
  {
    $this->deserves_love = TRUE;
    $this->first = $first;
    $this->last = $last;
  }
  function getFullName()
  {
    return $this->first . " " . $this->last;
  }
}
$very_good_dog = new Pet("Lassie", "Come Home");
echo $very_good_dog->getFullName(); # Prints "Lassie Come Home"

if ($very_good_dog->deserves_love) {
  echo "I love you!";
}
// Prints: I love you!


class Beverage {
  public $temperature;
  
  function getInfo() {
    return "This beverage is $this->temperature.";
  }
}

class Milk extends Beverage {
  function __construct() {
    $this->temperature = "cold";
  }
  function getInfo() {
    return parent::getInfo()." I like my milk this way.";
  }
}

$drink = new Milk();
echo $drink->getInfo();
// This beverage is cold. I like my milk this way. 