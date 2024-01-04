<?php
class AdamsUtils {
  public static $the_answer = 42;
  public static function addTowel($string) {
    return $string . " and a towel.";
  }
}


$items = "I brought apples";

// the answer will not change, so there is no point making an instance of the class
// The point of the class is just to group together the data and method
echo AdamsUtils::$the_answer, "\n";
echo AdamsUtils::addTowel($items);