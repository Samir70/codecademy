<?php
// break and continue work as in JS

for ($i = 10; $i >= 0; $i--) {
  if ($i > 2) {
    echo "$i\n";
  } elseif ($i === 2) {
    echo "Ready!\n";
  } elseif ($i === 1) {
    echo "Set!\n";
  } else {
    echo "Go!\n";
  }
}

$scores = [
  "Alice" => 99,
  "Bob" => 95,
  "Charlie" => 98,
  "Destiny" => 91,
  "Edward" => 88
];

foreach ($scores as $score) {
  echo "Someone received a score of $score.\n";
}
foreach ($scores as $name => $score) {
  echo "$name received a score of $score.\n";
}