<?php
$drinks = [
  "coffee" => 1,
  "tea" => 1,
  "juice" => 3,
  "gin" => 0.5
];
$pastries = [
  "danish",
  "scone",
  "apple pie"
]
  ?>

<h1>Welcome to the Repetitive Cafe</h1>

<h3>Drinks!</h3>
<ul>
  <?php
  foreach ($drinks as $drink => $cost):
    ?>
    <li>
      <?= $drink ?> ... £
      <?= $cost ?>
    </li>
    <?php
  endforeach;
  ?>
</ul>
<h3>Pastries! ($2 each)</h3>
<ul>
  <?php
  for ($i = 0; $i < count($pastries); $i++):
    ?>
    <li>
      <?= $pastries[$i] ?>
    </li>
    <?php
  endfor;
  ?>
</ul>