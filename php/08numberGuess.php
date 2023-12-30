<?php
$play_count = 0;
$correct_guesses = 0;
$guess_high = 0;
$guess_low = 0;

echo "I'll pick a number 1..10, you guess!\n";

function guessNumber()
{
  global $play_count, $correct_guesses, $guess_high, $guess_low;
  $play_count += 1;
  $rNum = rand(1, 10);
  echo "I've picked a new number\n";
  $guess = intval(readline("Guess my number\n>>"));
  echo "\nIn round $play_count you guessed $guess \n";
  if ($guess === $rNum) {
    $correct_guesses += 1;
  }
  if ($guess > $rNum) {
    $guess_high += 1;
  }
  if ($guess < $rNum) {
    $guess_low += 1;
  }
}

guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();

$percRight = round(($correct_guesses / $play_count) * 100);
echo "\nYou guess correctly $percRight % of the the time";
if ($guess_high > $guess_low) {
  echo "\nWhen you were wrong, you tended to guess high.";
}
if ($guess_high < $guess_low) {
  echo "\nWhen you were wrong, you tended to guess low.";
}
