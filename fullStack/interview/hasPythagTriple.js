const hasPythagTriplet = nums => {
  const squares = nums.map(n => n * n).sort((a, b) => a - b)
  for (let sq of squares) {
    const res = findTargetAsSumOfTwo(squares, sq)
    if (res) { return true }
  }
  return false
}

const findTargetAsSumOfTwo = (nums, target) => {
  for (let n of nums) {
    let res = findBinSearch(nums, target - n)
    if (res) { return res }
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

const tests = [
  { args: [[3, 4, 5]], out: true },
  { args: [[5, 4, 3]], out: true },
  { args: [[3, 4, 6]], out: false },
  { args: [[12, 1, 5, 7, 8, 9]], out: false },
  { args: [[12, 1, 5, 7, 13, 8, 9]], out: true },
];

tests.forEach((t, i) => {
  let res = hasPythagTriplet(...t.args);
  if (res !== t.out) {
    console.log(
      'test', i, 'should be', t.out, ' got ', res
    )
  } else {
    console.log('test', i, 'was correct!')
  }
});