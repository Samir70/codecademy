/**
 * You will need an additional parameter, i, 
 * that tells us where we are in the list of items. 
 * With each step, we will break the problem down into subproblems, 
 * and compare them to find the maximum value. 
 * There are three possibilities for every call of the function:

  - weightCap or i are zero, meaning the knapsack can hold no weight, 
    or there are no more items to look at. In either case, we return 0.
  - The weight of the item we’re looking at exceeds weightCap, 
    in which case we just move on, calling the function on the next item.
  - If neither of the above are true, 
    means we have to consider whether or not the item we are at (i) 
      should be included in the optimal solution.
 */

const recursiveKnapsack = function (weightCap, weights, values, i) {
  if (weightCap === 0 || i === 0) {
    return 0;
  } else if (weights[i - 1] > weightCap) {
    return recursiveKnapsack(weightCap, weights, values, i - 1);
  } else {
    const includeItem = values[i - 1] + recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);
    const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);
    return Math.max(includeItem, excludeItem);
  }
};

const dynamicKnapsack = function (weightCap, weights, values) {
  const numItem = weights.length;
  const matrix = new Array(numItem);

  for (let index = 0; index <= numItem; index++) {
    matrix[index] = new Array(weightCap + 1);
    for (let weight = 0; weight <= weightCap; weight++) {
      // Write your code here:
      if (index === 0 || weight === 0) {
        matrix[index][weight] = 0;
      } else if (weights[index - 1] <= weight) {
        let include = values[index - 1] + matrix[index - 1][weight - weights[index-1]]
        let exclude = matrix[index - 1][weight]
        matrix[index][weight] = Math.max(include, exclude)
      } else {
        matrix[index][weight] = matrix[index - 1][weight]
      }
    }
  }
  console.table(matrix)
  return matrix[numItem][weightCap];
};

// Use this to test your function:
const weightCap = 50;
const weights = [31, 10, 20, 19, 4, 3, 6];
const values = [70, 20, 39, 37, 7, 5, 10];
console.log(dynamicKnapsack(weightCap, weights, values));

// Leave this so we can test your code:
module.exports = dynamicKnapsack;

/**
 * 
┌─────────┬───┬───┬───┬───┬───┬───┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬─────┬─────┬─────┬─────┐
│ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6  │ 7  │ 8  │ 9  │ 10 │ 11 │ 12 │ 13 │ 14 │ 15 │ 16 │ 17 │ 18 │ 19 │ 20 │ 21 │ 22 │ 23 │ 24 │ 25 │ 26 │ 27 │ 28 │ 29 │ 30 │ 31 │ 32 │ 33 │ 34 │ 35 │ 36 │ 37 │ 38 │ 39 │ 40 │ 41 │ 42 │ 43 │ 44 │ 45 │ 46 │ 47  │ 48  │ 49  │ 50  │
├─────────┼───┼───┼───┼───┼───┼───┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼─────┼─────┼─────┼─────┤
│    0    │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │  0  │  0  │  0  │  0  │
│    1    │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70  │ 70  │ 70  │ 70  │
│    2    │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0  │ 0  │ 0  │ 0  │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 90 │ 90 │ 90 │ 90 │ 90 │ 90 │ 90  │ 90  │ 90  │ 90  │
│    3    │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0  │ 0  │ 0  │ 0  │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 39 │ 39 │ 39 │ 39 │ 39 │ 39 │ 39 │ 39 │ 39 │ 39 │ 59 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 90 │ 90 │ 90 │ 90 │ 90 │ 90 │ 90  │ 90  │ 90  │ 90  │
│    4    │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0  │ 0  │ 0  │ 0  │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 20 │ 37 │ 39 │ 39 │ 39 │ 39 │ 39 │ 39 │ 39 │ 39 │ 39 │ 57 │ 59 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 70 │ 76 │ 76 │ 90 │ 90 │ 90 │ 90 │ 90 │ 90 │ 90  │ 90  │ 96  │ 107 │
│    5    │ 0 │ 0 │ 0 │ 0 │ 7 │ 7 │ 7  │ 7  │ 7  │ 7  │ 20 │ 20 │ 20 │ 20 │ 27 │ 27 │ 27 │ 27 │ 27 │ 37 │ 39 │ 39 │ 39 │ 44 │ 46 │ 46 │ 46 │ 46 │ 46 │ 57 │ 59 │ 70 │ 70 │ 70 │ 70 │ 77 │ 77 │ 77 │ 77 │ 77 │ 77 │ 90 │ 90 │ 90 │ 90 │ 97 │ 97 │ 97  │ 97  │ 97  │ 107 │
│    6    │ 0 │ 0 │ 0 │ 5 │ 7 │ 7 │ 7  │ 12 │ 12 │ 12 │ 20 │ 20 │ 20 │ 25 │ 27 │ 27 │ 27 │ 32 │ 32 │ 37 │ 39 │ 39 │ 42 │ 44 │ 46 │ 46 │ 49 │ 51 │ 51 │ 57 │ 59 │ 70 │ 70 │ 70 │ 75 │ 77 │ 77 │ 77 │ 82 │ 82 │ 82 │ 90 │ 90 │ 90 │ 95 │ 97 │ 97 │ 97  │ 102 │ 102 │ 107 │
│    7    │ 0 │ 0 │ 0 │ 5 │ 7 │ 7 │ 10 │ 12 │ 12 │ 15 │ 20 │ 20 │ 20 │ 25 │ 27 │ 27 │ 30 │ 32 │ 32 │ 37 │ 39 │ 39 │ 42 │ 44 │ 46 │ 47 │ 49 │ 51 │ 52 │ 57 │ 59 │ 70 │ 70 │ 70 │ 75 │ 77 │ 77 │ 80 │ 82 │ 82 │ 85 │ 90 │ 90 │ 90 │ 95 │ 97 │ 97 │ 100 │ 102 │ 102 │ 107 │
└─────────┴───┴───┴───┴───┴───┴───┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴─────┴─────┴─────┴─────┘
 */