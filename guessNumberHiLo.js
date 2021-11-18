// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns 3 possible results:

// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).
// Return the number that I picked.

// Example 1:
// Input: n = 10, pick = 6 //pick is like the TARGET number
// Output: 6

// Example 2:
// Input: n = 1, pick = 1
// Output: 1


// Example 3:
// Input: n = 2, pick = 1
// Output: 1


// Example 4:
// Input: n = 2, pick = 2
// Output: 2


//   Forward declaration of guess API.
//  @param {number} num   your guess
//   @return 	            -1 if num is lower than the guess number
//  			             1 if num is higher than the guess number
//                         otherwise return 0
//   var guess = function(num) {}



// @param {number} n
//   @return {number}


var guessNumber = function (n) {
  let start = 0;
  let end = n;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (guess(middle) === 0) return middle;
    else if (guess(middle) === -1) {
      //-1: The number I picked is lower than your guess (i.e. target < num)
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
};
