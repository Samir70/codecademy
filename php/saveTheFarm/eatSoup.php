<?php
function eatSoup()
{
  // Write your code here:
  global $has_soup, $is_hungry;

  if ($has_soup && $is_hungry) {
    echo "You have eaten the soup!\n";
    $has_soup = false;
    $is_hungry = false;
  } else {
    if (!$has_soup) {
      echo "You don't have any cooked food to eat!\n";
    }
  }
}