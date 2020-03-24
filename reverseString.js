function reverse(str) {
  let reversedString = "";
  let index = 0;

  function helper(string) {
    if (index > string.length) return reversedString;
    if (string[string.length - index]) {
      reversedString = reversedString + string[string.length - index];
    }
    index++;
    return reversedString + helper(string);
  }
  helper(str);
  return reversedString;
}

console.log(reverse("awesome"));
