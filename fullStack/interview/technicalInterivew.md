# Technical Interview

## Whiteboarding
### Clarify the Problem
```
Given a list of numbers, return whether the list contains Pythagorean Triplets.
```
- Does the triplet need to be primitive?
- Is this a list of positive integers?
- Do we return true or false, or an example?
- How long might the list of numbers be?
- What is the maximum size of a number in the list?




### Create Inputs
- [3, 4, 5] => true
- [5, 4, 3] => true
- [1, 2, 3] => false
- [3, 5, 12, 14, 13] => true
### Outline the Solution
```
Don’t disregard interviewer's input! It gives the impression you would be difficult to work with on the job.
```
- square all the numbers
- convert to find target as sum of two integers

### Code the Solution

```js
const hasPythagTriplet = nums => {
  const squares = nums.map(n => n*n).sort((a, b) => a - b)
  for (let sq of squares) {
    const res = findTargetAsSumOfTwo(squares, sq)
    if (res) {return true}
  }
  return false
}

const findTargetAsSumOfTwo = (nums, target) => {
  for (let n of nums) {
    let res = findBinSearch(nums, target - n)
    if (res) {return res}
  }
  return false
}

const findBinSearch = (nums, target) => {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return true
    }
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return nums[left] === target
}
```
### Test the Solution

Talk through a dry run
Offer improvements: the above is O(nlogn) because of the sorting and because we do binary search n times.

This can be improved by using two pointers in the sorted list. 

- left + right < target: go to next left
- left + right > target: go to previous right

### Analyze the Solution
Use big O notation.