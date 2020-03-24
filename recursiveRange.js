function recursiveRange(num) {
  if (num < 1) return 0;
  return num + recursiveRange(--num);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));
