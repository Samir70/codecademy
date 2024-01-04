<?php
function validateAdult($age)
{
  $options = ["options" => ["min_range" => 18, "max_range" => 124]];
  if (filter_var($age, FILTER_VALIDATE_INT, $options)) {
    echo ("You are $age years old.");
  } else {
    echo ("That is not a valid age.");
  }
}

validateAdult(18); // Prints: You are 18 years old.
validateAdult(124); // Prints: You are 124 years old.
validateAdult(8); // Prints: That is not a valid age.
validateAdult(200); // Prints: That is not a valid age.




$pattern = '/^[(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4}$/';
preg_match($pattern, "(999)-555-2222"); // Returns: 1
preg_match($pattern, "555-2222"); // Returns: 0




$users = ["coolBro123" => "password123!", "coderKid" => "pa55w0rd*", "dogWalker" => "ais1eofdog$"];

function isUsernameAvailable ($username){
  global $users;
  if (isset($users[$username])){
    echo "That username is already taken.";
  } else {
    echo "$username is available.";
  }
}

isUsernameAvailable("coolBro123");
// Prints: That username is already taken. 
isUsernameAvailable("aisleOfPHP");
// Prints: aisleOfPHP is available.

