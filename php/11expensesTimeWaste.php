<?php

$annualExpenses = [
  "vacations" => 1000,
  "carRepairs" => 1000,
];

$monthlyExpenses = [
  "rent" => 1500,
  "utilities" => 200,
  "healthInsurance" => 200
];

$grossSalary = 48150;
$socialSecurity = $grossSalary * .062;

$incomeSegments = [[9700, .88], [29775, .78], [8675, .76]];

// Write your code below:
$netIncome = 0;
$netIncome += $incomeSegments[0][0] * $incomeSegments[0][1];
$netIncome += $incomeSegments[1][0] * $incomeSegments[1][1];
$netIncome += $incomeSegments[2][0] * $incomeSegments[2][1];

$annualIncome = $netIncome - $socialSecurity;
echo "$netIncome, $annualIncome\n";
$annualIncome -= $annualExpenses["vacations"];
$annualIncome -= $annualExpenses["carRepairs"];

echo "$netIncome, $annualIncome\n";
$monthlyIncome = $annualIncome / 12;
echo "$netIncome, $annualIncome ($monthlyIncome per month)\n";
$monthlyIncome -= $monthlyExpenses["rent"];
$monthlyIncome -= $monthlyExpenses["utilities"];
$monthlyIncome -= $monthlyExpenses["healthInsurance"];

echo "$netIncome, $annualIncome ($monthlyIncome per month)\n";
$weekly = $monthlyIncome / 4.33;
echo "$netIncome, $annualIncome ($weekly per week)\n";

$weeklyExpenses = [
  "gas" => 25,
  "food" => 90,
  "entertainment" => 47
];

$weekly -= $weeklyExpenses["gas"];
$weekly -= $weeklyExpenses["food"];
$weekly -= $weeklyExpenses["entertainment"];
echo "$netIncome, $annualIncome ($weekly per week)\n";

$savings = $weekly * 52;
echo $savings;