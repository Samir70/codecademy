<?php
// Move the cupboard
  
function moveCupboard(){
    global $is_hungry, $wearing_contacts, $wearing_glasses, $needs_to_pee, $location, $moved_cupboard;

	// Write your code here:
  $readyToWork = !$is_hungry && $wearing_contacts && !$wearing_glasses && !$needs_to_pee;
  
  if ($location !== "kitchen") {
    echo"You don't see a cupboard here!\n";
  } else {
    if ($moved_cupboard) {
      echo"You've already moved the cupboard!\n";
    } elseif ($readyToWork) {
      echo "You move the cupboard aside. You have revealed a safe crudely fit into the wall behind where the cupboard used to be.\n";
      $moved_cupboard = true;
    } else {
      echo "You're not ready to work! You need to be properly fed, have an empty bladder, and have corrected vision (without dealing with those pesky glasses). Without these things, there's no point in even trying to move the cupboard.\n";
    }
  }
}