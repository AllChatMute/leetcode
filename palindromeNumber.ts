const isPalindrome = (num: number): boolean =>
  +num.toString().split("").reverse().join("") === num;

console.log(isPalindrome(123));
console.log(isPalindrome(121));
