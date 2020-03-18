function binarySearch(sortedArray, value) {
  let left = 0;
  let right = sortedArray.length - 1;
  let middle = Math.floor(left + right / 2);

  while (value !== sortedArray[middle] && left <= right) {
    if (value < sortedArray[middle]) {
      right = middle - 1;
      middle = Math.floor((left + right) / 2);
    } else {
      left = middle + 1;
      middle = Math.floor((left + right) / 2);
    }
  }

  return sortedArray[middle] === value ? middle : -1;
}

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    2
  )
);
