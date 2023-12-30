<?php
namespace Codecademy;

function markAnswer($ans) {
  if ($ans) {
    return "green";
  } else {
    return "red";
  }
}
echo markAnswer(true);
echo markAnswer(false);

// ternary operator:
$isClicked = FALSE;
$link_color = $isClicked ? "purple" : "blue";

if ("") {
  echo "this will not print";
} elseif (null) {
  echo "this will not print";
} elseif ([]) {
  echo "this will not print";
} elseif (0) {
  echo "this will not print";
} elseif ("0") {
  echo "this will not print";
} else {
  echo "Finally!";
}

function truthyOrFalsy($thing) {
  return $thing ? "True" : "False";
}

echo truthyOrFalsy("0");   // false
echo truthyOrFalsy("000"); // true


// to replace lots of elseif statements

function returnSeason($month) {
  switch ($month) {
    case "December":
    case "January":
    case "February":
      return "winter";
    case "March": 
    case "April":
    case "May":
      return "spring";
    case "June": 
    case "July":
    case "August": 
      return "summer";
    case "September":
    case "October":
    case "November": 
      return "fall";
    default:
      return "invalid month";
  }
}