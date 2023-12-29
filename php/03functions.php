<?php

$string_one = "you have teeth";
$string_two = "toads are nice";
$string_three = "brown is my favorite color";

// Write your code below:
function convertToQuestion(&$phrase) {
  $phrase = "Do you think $phrase?\n";
  return $phrase;
}

convertToQuestion($string_one);
echo $string_one;
convertToQuestion($string_two);
echo $string_two;
convertToQuestion($string_three);
echo $string_three;
