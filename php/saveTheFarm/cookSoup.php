<?php

function cookSoup()
{
  // Write your code here:
  global $location, $has_mushrooms, $has_soup;

  if ($has_mushrooms && $location === "kitchen") {
    $has_mushrooms = false;
    $has_soup = true;
    echo "You made some mushroom soup. Mushroom is the queen of all soups!\n";
  } else {
    echo "You can't cook like this! You need mushrooms to cook AND to be in the kitchen.\n";
  }

}