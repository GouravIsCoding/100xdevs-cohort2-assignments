/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length < 2) return true;
  str = str.toLowerCase();
  let newStr = "";
  for (let char of str) {
    if (char >= "a" && char <= "z") newStr += char;
  }
  let low = 0;
  let high = newStr.length - 1;
  while (low < high) {
    if (newStr[low] !== newStr[high]) return false;
    low++;
    high--;
  }
  return true;
}

module.exports = isPalindrome;
