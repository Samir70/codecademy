<?php

class Pet2
{
  protected $healthScore = 0; // avoids error if used in subclass
  // private $healthScore = 0; // gives error if used in subclass
  function exercise()
  {
    $this->healthScore++;
  }
  function feed()
  {
    $this->healthScore++;
  }
  function healthCheck()
  {
    if ($this->healthScore >= 2) {
      echo "This is a healthy pet!";
    } else {
      echo "This is an unhealthy pet";
    }
  }
}

class Horse extends Pet2 {
  function brushTeeth() {
    $this->healthScore++; 
  }
}

$my_pet = new Horse();
// $my_pet = new Horse("Black", "Beauty"); //if using Pet from other file
$my_pet->brushTeeth(); // Error if healthscore left as private