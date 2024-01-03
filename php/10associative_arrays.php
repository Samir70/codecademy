<?php

$about_me = array(
  "fullname" => "Aisle Nevertell",
  "social" => 123456789
);

$grades = [
  "Jane" => 98,
  "Lily" => 74,
  "Dan" => 88,
];

// echo $grades; // Prints: Array

echo implode(", ", $grades); // Prints: 98, 74, 88 
print_r($grades);
// Array
// (
//     [Jane] => 98
//     [Lily] => 74
//     [Dan] => 88
// )

$nums = ["one" => 1, "two" => 2];
echo implode(", ", $nums); // Prints: 1, 2
unset($nums["one"]);
echo implode(", ", $nums); // Prints: 2


$num_array = [1000 => "one thousand", 100 => "one hundred", 600 => "six hundred"];
$num_array[] = "New Element in \$num_array";
echo $num_array[1001]; // Prints: New Element in $num_array

$animals_array = [
  "panda" => "very cute",
  "lizard" => "cute",
  "cockroach" => "not very cute"
];
array_push($animals_array, "New Element in \$animals_array");
echo $animals_array[0]; // Prints: New Element in $animals_array


$my_array = [
  "panda" => "very cute",
  "lizard" => "cute",
  "cockroach" => "not very cute"
];
$more_rankings = [
  "capybara" => "cutest",
  "lizard" => "not cute",
  "dog" => "max cuteness"
];
$animal_rankings = $my_array + $more_rankings;

$number_array = [8, 3, 7];
$string_array = ["first element", "second element", "third element"];
$union_array = $number_array + $string_array;
// [8, 3, 7] since keys in second array are the same as first, none are changed.




$favorites = ["food" => "pizza", "person" => "myself", "dog" => "Tadpole"];
$copy = $favorites;
$alias =& $favorites;
$favorites["food"] = "NEW!";

echo $favorites["food"]; // Prints: NEW!
echo $copy["food"]; // Prints: pizza
echo $alias["food"]; // Prints: NEW!

function changeColor ($arr) 
{
  $arr["color"] = "red";    
}
function reallyChangeColor (&$arr) 
{
  $arr["color"] = "red";    
}
$object = ["shape"=>"square", "size"=>"small", "color"=>"green"];

changeColor ($object);
echo $object["color"]; // Prints: green
reallyChangeColor ($object);
echo $object["color"]; // Prints: red