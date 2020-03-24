function flatten(array) {
  const flatArray = [];

  function helper(arr) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        return helper(element);
      }
      return flatArray.push(element);
    });
  }

  helper(array);
  return flatArray;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
