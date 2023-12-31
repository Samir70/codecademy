<?php

function searchSafe()
{
  // Write your code here:
  global $location, $moved_cupboard, $rounds_left;

  if ($location !== "kitchen" || !$moved_cupboard) {
    echo "What cupboard are you talking about? \n";
  } else {
    echo "You search through the safe (the passcode is \"1234\"). With bated breath, you pull out the contents! It's a chocolate Mickey Mouse, wrapped in gold foil. Delicious!\nYOU WIN THE GAME!!!!\n\n";
    $rounds_left = 1;
  }

}