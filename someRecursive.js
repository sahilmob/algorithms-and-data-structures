function someRecursive(array, cb) {
  if (array.length <= 0) return false;
  const firstItem = array[0];
  array.splice(0, 1);
  return cb(firstItem) || someRecursive(array, cb);
}

function isOdd(val) {
  return val % 2 !== 0;
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false
