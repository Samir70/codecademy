const count = (arr, val) => {
  let count = 0;
  for (let n of arr) {
    if (n <= val) {count++}
  }
  return count;
}
function getX(x, nums) {
  // Write your code here
  let left = Math.min(...nums)
  let right = Math.max(...nums)
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let c = count(nums, mid)
    if (c === x) {left = mid; right = mid - 1}
    if (c < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  while (!nums.includes(left)) {left--}
  return left
}

console.log(getX(11, [28, 4, 3, 8, 5, 10, -3, -3, 7, 9, 40]));

// Leave this so we can test your code:
module.exports = getX;