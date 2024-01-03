<?php
$count = 1;
while ($count <= 100) {
  if ($count % 33 === 0) {
    echo "$count is divisible by 33\n";
  }
  $count += 1;
}

// do...while runs at least once
do {
  $guess = readline("\nGuess the number\n");
} while ($guess != "42");
echo "\nYou correctly guessed 42!";