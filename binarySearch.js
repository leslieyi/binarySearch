// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) return middle;
    //[1,2,3,4,5]
    else if (target < nums[middle]) {
      //if target is smaller than the middle number
      end = middle - 1;
    } //if target is greater than the smaller number
    else start = middle + 1;
  }
  return -1;
}

// [-1,0,5]-1
