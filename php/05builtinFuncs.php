<?php
namespace Codecademy;

$first = "Welcome to the magical world of built-in functions.";
  
$second = 82137012983; 

// data types
echo gettype($first);
echo gettype($second);
echo var_dump($first);
echo var_dump($second);


// String functions
echo strrev("Hello, World!"); // Prints: !dlroW ,olleH
echo strtolower("HeLLo"); // Prints: hello
echo strlen("HeLLo"); // Prints: 5
echo str_repeat("hi", 10); // Prints: hihihihihihihihihihi 

$story = "I was like, \"Dude, like just tell me what you like think because like everyone else is like being totally honest, and like I just want to know what you like think.\" So like I don't know...";

echo substr_count($story, "like"); // Prints: 8

$current_month = date("F"); // "December"

// number functions
echo abs(-10.99); // Prints: 10.99
echo abs(127); // Prints: 127

echo round(1.2); // Prints: 1
echo round(1.5); // Prints: 2
echo ceil(1.2); // Prints: 2
echo round(1298736.821763876); // Prints: 1298737

$initial = '555';
$a = octdec($initial);
$b = deg2rad($a);
$c = cos($b);
$d = round($c, 3);
$e = log($d);
$f = abs($e);
$g = acos($f);
$h = rad2deg($g);
$i = floor($h);
$j = $i - 47;
echo $j, "\n"; // 42

function calculateCircleArea($d) {
  return pi() * ($d/2)**2;
}

// rand() return an int 0..maxAllowedBySystem. 
// that max varies from system to system
$max = getrandmax(); 

echo $max; // 2147483647
echo "\n";
echo rand(); // Prints a number between 0 and $max

echo rand(1, 2); // Prints either 1 or 2
echo rand(5, 10); // Prints a number between 5 and 10 (inclusive!)
echo rand(1, 100); // Prints a number between 1 and 100 (inclusive!)

// docs:
// substr_count ( 
//     string $haystack , string $needle 
//     [, int $offset = 0 [, int $length ]] 
// ) : int

namespace Codecademy;

// str_pad ( 
//   string $input , int $pad_length 
//   [, string $pad_string = " " [, int $pad_type = STR_PAD_RIGHT ]] 
// ) : string 

$a = 29;
$b = "You did it!";
$c = STR_PAD_BOTH;
$d = "*~*";

// Write your code below:
echo str_pad($b, $a, $d, $c); // *~**~**~*You did it!*~**~**~*