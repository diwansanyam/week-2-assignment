/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  vowels =["a","e","i","o","u"];
  totalVowels =0
  strArr = str.toLowerCase().split("") 
  for (let index = 0; index < strArr.length; index++) {
    if(vowels.includes(strArr[index])){
      totalVowels++
    }
  } 
  return totalVowels
}

module.exports = countVowels;