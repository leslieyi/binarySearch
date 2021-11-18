// Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

function searchRange(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle;

  // Example 1:
  // Input: nums = [5,7,7,8,8,10], target = 8
  // Output: [3,4]
  // find the start
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (nums[middle] >= target) end = middle - 1;
    else start = middle + 1; 
  }

  // if target doesn't exist
  if (nums[start] !== target) return [-1, -1];

  const starting = start;

  // reset end
  end = nums.length - 1;

  // find the end
  while (start <= end) {
    middle = Math.floor((start + end) / 2); 
    if (nums[middle] <= target) start = middle + 1;
    else end = middle - 1; 
  }
  return [starting, end];
}
