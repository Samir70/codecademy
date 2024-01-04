<?php
class StringUtils
{
  public static function secondCase($name)
  {
    $n = strtolower($name);
    if (strlen($n) < 2) {
      return $n;
    }
    $n[1] = strtoupper($n[1]);
    return $n;
  }
}

class Pajamas
{
  private $owner, $fit, $color;
  function __construct($owner, $fit, $color)
  {
    $this->owner = StringUtils::secondCase($owner);
    $this->fit = $fit;
    $this->color = $color;
  }
  function describe()
  {
    return "These pajamas are size $this->fit, $this->color and belong to $this->owner.\n";
  }
  function setFit($newSize)
  {
    $this->fit = $newSize;
  }
}

class ButtonablePajamas extends Pajamas
{
  private $button_state = "unbuttoned";
  function describe()
  {
    return parent::describe() . "   ...They are currently $this->button_state.";
  }
  function toggleButtons()
  {
    if ($this->button_state === "unbuttoned") {
      $this->button_state = "buttoned";
    } else {
      $this->button_state = "unbuttoned";
    }
  }
}

// echo StringUtils::secondCase("Hello!");
// echo StringUtils::secondCase("H");
// echo StringUtils::secondCase("");

$chickenPJs = new Pajamas("CHICKEN", 5, "red");
echo $chickenPJs->describe();
$chickenPJs->setFit(3);
echo $chickenPJs->describe();

$moosePJs = new ButtonablePajamas("moose", 5, "green");
echo $moosePJs->describe();
$moosePJs->toggleButtons();
echo $moosePJs->describe();
$moosePJs->toggleButtons();
echo $moosePJs->describe();