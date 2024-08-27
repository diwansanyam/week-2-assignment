/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  cleanStr =str.toLowerCase().split("").filter((char)=>(char!==","&& char!==" "&&char!=="."&& char!=="?"&& char!=="!")).join("")
  if (cleanStr == cleanStr.split("").reverse().join("")){
    return true;
  }
  return false
}

module.exports = isPalindrome;
