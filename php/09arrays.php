<?php
// Write your code below:
$my_array = array(0, 1, 2);
echo count($my_array); // Prints: 3

$number_array = [0, 1, 2];
print_r($number_array);
echo implode(", ", $number_array); // 0, 1, 2 

$string_array = ["first element", "second element"];
$string_array[] = "third element";
echo implode(", ", $string_array); 
// Prints: first element, second element, third element 


$my_array = ["tic", "tac", "toe"];
array_pop($my_array); 
// $my_array is now ["tic", "tac"]
$popped = array_pop($my_array); 
// $popped is "tac"
// $my_array is now ["tic"]


$new_array = ["eeny"];
$new_length = array_push($new_array, "meeny", "miny", "moe"); 
echo $new_length; // Prints: 4
echo implode(", ", $new_array); // Prints: eeny, meeny, miny, moe 

$adjectives = ["bad", "good", "great", "fantastic"];
$removed = array_shift($adjectives); 
echo $removed; //Prints: bad
echo implode(", ", $adjectives); // Prints: good, great, fantastic

$foods = ["pizza", "crackers", "apples", "carrots"];
$arr_len = array_unshift($foods, "pasta", "meatballs", "lettuce"); 
echo $arr_len; //Prints: 7
echo implode(", ", $foods); 
// Prints: pasta, meatballs, lettuce, pizza, crackers, apples, carrots