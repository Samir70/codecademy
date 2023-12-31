<?php
  // Change player location
function changeLocation(){	
  // Write your code here:
  global $location;

  echo "Where do you want to go?\n"; 
  $newLoc = strtolower(readline(">>"));
  if($newLoc !== "kitchen" && $newLoc !== "bathroom" && $newLoc !== "woods"){
    echo "That doesn't make sense. Are you confused? Try 'look around'.\n";
  }
  if($location == "kitchen"){
    if($newLoc == "bathroom"){
      echo "You go to: bathroom.\n";
      $location = "bathroom";
    } 
    if($newLoc == "woods"){
      echo "You follow the winding path, shivering as you make your way deep into the Terror Woods.\n";
      $location = "woods";
    }
  } else {
    if($newLoc == "woods" || $newLoc == "kitchen"){
      echo "You can't go directly to the $newLoc from the $location. Try going somewhere else first.\n";
    }
  }
  if($location == "bathroom"){
    if($newLoc == "kitchen"){
      echo "You go to: kitchen.\n";
      $location = "kitchen";
    }
    if($newLoc == "woods"){
      echo "You can't go directly to the $newLoc from the $location. Try going somewhere else first.\n";
    }
  }
  if($location == "woods"){
    if($newLoc == "kitchen"){
      echo "You go to: kitchen.\n";
      $location = "kitchen";
    }
    if($newLoc == "bathroom"){
      echo "You can't go directly to the $newLoc from the $location. Try going somewhere else first.\n";
    }
  }
}