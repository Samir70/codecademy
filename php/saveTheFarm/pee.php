<?php

function pee()
{
  // Write your code here:
  global $location, $needs_to_pee;

  if ($location === "bathroom" || $location === "woods") {
    $needs_to_pee = false;
    echo "You relieve yourself.\n";
  } else {
    echo "Are you crazy? You can't do that in the $location";
  }

}