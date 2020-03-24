function countUnique(sortedArray) {
  let left = 0;
  let right = 1;
  let uniqueValues = 0;

  if (sortedArray.length < 1) {
    return uniqueValues;
  }

  if (sortedArray === 1) {
    uniqueValues = 1;
    return uniqueValues;
  }

  ++uniqueValues;

  while (right < sortedArray.length - 1) {
    if (sortedArray[left] === sortedArray[right]) {
      ++left;
      ++right;
    } else {
      ++uniqueValues;
      ++right;
    }
  }
  return uniqueValues;
}

console.log(countUnique([1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8]));
