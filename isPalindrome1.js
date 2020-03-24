function isPalindrome(str) {
  let index = 0;
  let reversedString = "";

  function helper(string) {
    if (index > string.length) return reversedString;
    if (string[string.length - index]) {
      reversedString = reversedString + string[string.length - index];
    }
    index++;
    return reversedString + helper(string);
  }

  helper(str);

  if (reversedString === str) return true;
  return false;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
